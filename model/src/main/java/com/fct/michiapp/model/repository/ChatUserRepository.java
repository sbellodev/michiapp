package com.fct.michiapp.model.repository;

import com.fct.michiapp.model.entities.ChatUser;
import com.fct.michiapp.model.entities.UserLike;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ChatUserRepository extends CrudRepository<ChatUser, Integer>, ChatUserRepositoryCustom {
	@Query(value = "SELECT id FROM ChatUser WHERE user1_id = ?1 AND user2_id = ?2 ", nativeQuery = true)
	Integer getChatId(Integer user1Id, Integer user2Id);

}
