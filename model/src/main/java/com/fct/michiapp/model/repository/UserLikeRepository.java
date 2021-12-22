package com.fct.michiapp.model.repository;

import com.fct.michiapp.model.entities.UserLike;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserLikeRepository extends CrudRepository<UserLike, Integer> {
	@Query(value =
		"SELECT * FROM UserLike t1 INNER JOIN UserLike t2 " +
			"ON (t1.user1_id = t2.user2_id AND t1.user2_id = t2.user1_id) " +
			"WHERE t1.user1_id = ?1 ", nativeQuery = true)
	List<UserLike> findMatchById(Integer user_id);

	@Query(value = "SELECT * FROM UserLike WHERE user1_id = ?1 AND user2_id = ?2 ", nativeQuery = true)
	Integer getMatch(Integer user1Id, Integer user2Id);
}
