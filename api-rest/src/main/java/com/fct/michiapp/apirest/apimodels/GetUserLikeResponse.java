package com.fct.michiapp.apirest.apimodels;

import com.fct.michiapp.model.entities.UserLike;
import com.fct.michiapp.model.entities.UserLikeId;

import java.io.Serializable;


public class GetUserLikeResponse implements Serializable {

	private UserLikeId userLikeId;

	public UserLikeId getUserLikeId() {
		return userLikeId;
	}

	public void setUserLikeId(UserLikeId userLikeId) {
		this.userLikeId = userLikeId;
	}

}