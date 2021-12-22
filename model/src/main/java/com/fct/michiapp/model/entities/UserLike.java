package com.fct.michiapp.model.entities;

import javax.persistence.Entity;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;


@Entity
public class UserLike implements Serializable {
	@EmbeddedId
	private UserLikeId userLikeId;
	@Column(name = "created_at")
	private Timestamp createdAt;

	public UserLike() {
	}

	public UserLike(UserLikeId userLikeId) {
		this.userLikeId = userLikeId;
		this.createdAt = new Timestamp(System.currentTimeMillis());
	}

	public UserLikeId getUserLikeId() {
		return userLikeId;
	}
}