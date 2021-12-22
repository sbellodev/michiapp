package com.fct.michiapp.model.entities.queries;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.ColumnResult;

@Data
public class UserSettingsData {

	private Integer id;
	private String name;
	private String animalName;
	private String imgEncoded;
	private String imgType;
	private String cityName;

	public UserSettingsData(Integer id, String name, String animalName, String imgEncoded, String imgType, String cityName) {
		this.id = id;
		this.name = name;
		this.animalName = animalName;
		this.imgEncoded = imgEncoded;
		this.imgType = imgType;
		this.cityName = cityName;
	}
}
