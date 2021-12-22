package com.fct.michiapp.apirest.apimodels;

import java.io.Serializable;


public class DeleteUserSettingsRequest implements Serializable {
	private Integer id;
	private Integer userId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}
}