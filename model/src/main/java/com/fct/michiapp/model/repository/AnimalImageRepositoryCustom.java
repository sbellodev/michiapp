package com.fct.michiapp.model.repository;

import com.fct.michiapp.model.entities.AnimalImage;
import com.fct.michiapp.model.entities.queries.FileManager;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface AnimalImageRepositoryCustom {
	void saveFile(Integer user_id, String name, byte[] bytes, String type);

	void deleteFile(Integer id);
}
