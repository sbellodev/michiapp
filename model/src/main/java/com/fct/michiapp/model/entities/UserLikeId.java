package com.fct.michiapp.model.entities;

import javax.persistence.*;
import java.io.Serializable;


@Embeddable
public class UserLikeId implements Serializable {
	@Column(name = "user1_id")
	private Integer user1Id;
	@Column(name = "user2_id")
	private Integer user2Id;

	public Integer getUser1Id() {
		return user1Id;
	}

	public Integer getUser2Id() {
		return user2Id;
	}
}