package com.fct.michiapp.model.repository;

import com.fct.michiapp.model.entities.Animal;
import com.fct.michiapp.model.entities.AnimalImage;
import com.fct.michiapp.model.entities.UserLike;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface AnimalImageRepository extends CrudRepository<AnimalImage, Integer>, AnimalImageRepositoryCustom {
	@Query(value = "SELECT COUNT(user_id) FROM animalimage WHERE user_id = ?1", nativeQuery = true)
	Integer getNumImagesById(Integer userId);

	@Query(value = "SELECT * FROM animalimage WHERE id = 0 AND user_id = 0", nativeQuery = true)
	AnimalImage getDefaultImage();

	@Query(value = "SELECT id FROM animalimage WHERE user_id = ?1 AND img_name LIKE 'MICHIDEFAULT'", nativeQuery = true)
	Integer getDefaultImageByUserId(Integer userId);
}
