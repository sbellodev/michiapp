package com.fct.michiapp.model.repository.imp;

import com.fct.michiapp.model.entities.queries.ChatsData;
import com.fct.michiapp.model.entities.queries.LikesPerUser;
import com.fct.michiapp.model.repository.ChatUserRepositoryCustom;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

public class ChatUserRepositoryImpl implements ChatUserRepositoryCustom {
    @PersistenceContext
    EntityManager em;

    @Override
    public List<ChatsData> getChatsByUserId(Integer userId) {
        Query myQuery = em.createNativeQuery(
                "SELECT cu.id, cu.other_id, a.animal_name, ai.img_encoded, ai.img_type, cl.message, cl.created_at FROM " +
                        "(SELECT id, user1_id, user2_id, created_at, (CASE WHEN user1_id = ?1 THEN user2_id ELSE user1_id END) AS other_id " +
                        "FROM ChatUser cu2 " +
                        "WHERE cu2.user1_id = ?1 OR cu2.user2_id = ?1 " +
                        ") AS cu " +
                        "LEFT JOIN animal a ON (a.user_id = cu.other_id) " +
                        "LEFT JOIN (SELECT user_id, id, img_encoded, img_type FROM animalimage WHERE id " +
                        "IN (SELECT MAX(id) FROM animalimage GROUP BY user_id)) ai " +
                        "ON (ai.user_id = cu.other_id) " +
                        "LEFT JOIN ChatLog cl ON (cl.chatroom_id = cu.id) AND (cl.id IN (SELECT MAX(cl2.id) FROM ChatLog cl2 GROUP BY cl2.chatroom_id))",
                "ChatsDataMapping");
        myQuery.setParameter(1, userId);
        return (List<ChatsData>) myQuery.getResultList();
    }
}
