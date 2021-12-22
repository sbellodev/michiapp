package com.fct.michiapp.model.repository;

import com.fct.michiapp.model.entities.Animal;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AnimalRepository extends CrudRepository<Animal, Integer> {
	Optional<Animal> findByUserId(Integer id);

	@Query(value = "SELECT * FROM Animal WHERE user_id = ?1", nativeQuery = true)
	Animal getAnimalById(Integer userId);
}
