package com.fct.michiapp.model.repository;

import com.fct.michiapp.model.entities.Users;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Users, Integer>, UserRepositoryCustom {
	@Query(value = "SELECT id FROM users WHERE email = ?1 AND password = ?2", nativeQuery = true)
	Integer findByEmailAndPassword(String email, String password);

	@Query(value = "SELECT id FROM users WHERE email = ?1", nativeQuery = true)
	Integer findByEmail(String email);
}
