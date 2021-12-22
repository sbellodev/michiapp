package com.fct.michiapp.model.repository;

import com.fct.michiapp.model.entities.Animal;
import com.fct.michiapp.model.entities.ChatLog;
import com.fct.michiapp.model.entities.City;
import com.fct.michiapp.model.entities.UserLike;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CityRepository extends CrudRepository<City, Integer> {
	@Query(value = "SELECT * FROM City", nativeQuery = true)
	List<City> getCityNames();
}
