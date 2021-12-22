package com.fct.michiapp.model.entities.queries;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.Column;

@Data
public class UserData {

	private Integer id;
	private String name;
	private String slug;
	private String email;
	private String birthDate;
	private String createdAt;
	private Boolean registered;
	private String cityName;

	public UserData(Integer id, String name, String slug, String email, String birthDate, String createdAt, Boolean registered, String cityName) {
		this.id = id;
		this.name = name;
		this.slug = slug;
		this.email = email;
		this.birthDate = birthDate;
		this.createdAt = createdAt;
		this.registered = registered;
		this.cityName = cityName;
	}
}
