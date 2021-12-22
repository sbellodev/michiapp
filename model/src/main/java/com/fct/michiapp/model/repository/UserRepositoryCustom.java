package com.fct.michiapp.model.repository;

import com.fct.michiapp.model.entities.queries.UserAnimalData;
import com.fct.michiapp.model.entities.queries.UserData;
import com.fct.michiapp.model.entities.queries.UserSettingsData;

import java.util.List;

public interface UserRepositoryCustom {
	List<UserAnimalData> findNearUsers(String userCity);

	UserData getUserById(Integer userId);

	UserSettingsData getUserSettingsDataById(Integer userId);

	UserAnimalData getUserFiles(Integer userId);
}
