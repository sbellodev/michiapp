package com.fct.michiapp.apirest.apimodels;

import com.fct.michiapp.model.entities.UserLikeId;

import java.io.Serializable;


public class AddUserLikeRequest implements Serializable {

	private UserLikeId userLikeId;
	private Integer user1Id;
	private Integer user2Id;

	public UserLikeId getUserLikeId() {
		return userLikeId;
	}
}