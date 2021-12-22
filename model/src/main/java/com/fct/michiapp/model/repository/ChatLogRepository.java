package com.fct.michiapp.model.repository;

import com.fct.michiapp.model.entities.ChatLog;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ChatLogRepository extends CrudRepository<ChatLog, Integer> {
	@Query(value = "SELECT * FROM ChatLog WHERE chatroom_id = ?1 ORDER BY id DESC", nativeQuery = true)
	List<ChatLog> findChatLogMessagesId(Integer chatroom_id);

	@Query(value = "SELECT (CASE WHEN user1_id = ?1 THEN user2_id ELSE user1_id END) AS other_id " +
									"FROM ChatUser cu2 " +
									"WHERE (cu2.user1_id = ?1 OR cu2.user2_id = ?1) " +
									"AND cu2.id = ?2 ",
									nativeQuery = true)
	Integer findChatUserOtherId(Integer user_id, Integer chatroom_id);
}
