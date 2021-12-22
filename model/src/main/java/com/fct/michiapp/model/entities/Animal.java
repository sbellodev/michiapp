package com.fct.michiapp.model.entities;

import com.fct.michiapp.model.entities.queries.*;
import lombok.Data;

import javax.persistence.*;

@SqlResultSetMapping(
	name = "LikeWithLikeMapping",
	classes = @ConstructorResult(
		targetClass = LikesPerUser.class,
		columns = {
			@ColumnResult(name = "user_id", type = Integer.class),
			@ColumnResult(name = "num_matches", type = Integer.class)
		}
	)
)
@SqlResultSetMapping(
	name = "UserExtendedMapping",
	classes = @ConstructorResult(
		targetClass = UserData.class,
		columns = {
			@ColumnResult(name = "id", type = Integer.class),
			@ColumnResult(name = "name", type = String.class),
			@ColumnResult(name = "slug", type = String.class),
			@ColumnResult(name = "email", type = String.class),
			@ColumnResult(name = "birth_date", type = String.class),
			@ColumnResult(name = "created_at", type = String.class),
			@ColumnResult(name = "registered", type = Boolean.class),
			@ColumnResult(name = "city_name", type = String.class),
		}
	)
)
@SqlResultSetMapping(
	name = "UserAnimalDataMapping",
	classes = @ConstructorResult(
		targetClass = UserAnimalData.class,
		columns = {
			@ColumnResult(name = "id", type = Integer.class),
			@ColumnResult(name = "name", type = String.class),
			@ColumnResult(name = "animal_name", type = String.class),
			@ColumnResult(name = "img_array", type = String.class),
			@ColumnResult(name = "img_type", type = String.class),
			@ColumnResult(name = "distance", type = Float.class)
		}
	)
)
@SqlResultSetMapping(
	name = "SingleUserAnimalDataMapping",
	classes = @ConstructorResult(
		targetClass = UserAnimalData.class,
		columns = {
			@ColumnResult(name = "id", type = Integer.class),
			@ColumnResult(name = "name", type = String.class),
			@ColumnResult(name = "animal_name", type = String.class),
			@ColumnResult(name = "img_id_array", type = String.class),
			@ColumnResult(name = "img_array", type = String.class),
			@ColumnResult(name = "img_type", type = String.class),
		}
	)
)
@SqlResultSetMapping(
	name = "ChatsDataMapping",
	classes = @ConstructorResult(
		targetClass = ChatsData.class,
		columns = {
			@ColumnResult(name = "id", type = Integer.class),
			@ColumnResult(name = "other_id", type = Integer.class),
			@ColumnResult(name = "animal_name", type = String.class),
			@ColumnResult(name = "img_encoded", type = String.class),
			@ColumnResult(name = "img_type", type = String.class),
			@ColumnResult(name = "message", type = String.class),
			@ColumnResult(name = "created_at", type = String.class)
		}
	)
)
@SqlResultSetMapping(
	name = "UserSettingsDataMapping",
	classes = @ConstructorResult(
		targetClass = UserSettingsData.class,
		columns = {
			@ColumnResult(name = "id", type = Integer.class),
			@ColumnResult(name = "name", type = String.class),
			@ColumnResult(name = "animal_name", type = String.class),
			@ColumnResult(name = "img_encoded", type = String.class),
			@ColumnResult(name = "img_type", type = String.class),
			@ColumnResult(name = "city_name", type = String.class)
		}
	)
)
@SqlResultSetMapping(
	name = "FileDataMapping",
	classes = @ConstructorResult(
		targetClass = FileManager.class,
		columns = {
			@ColumnResult(name = "id", type = Integer.class),
			@ColumnResult(name = "user_id", type = Integer.class),
			@ColumnResult(name = "img_name", type = String.class),
			@ColumnResult(name = "bytes", type = byte[].class),
			@ColumnResult(name = "img_encoded", type = byte[].class),
			@ColumnResult(name = "img_type", type = String.class),
		}
	)
)
@Entity
@Data
public class Animal {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "user_id")
	private Integer userId;
	@Column(name = "animal_name")
	private String animalName;

	public Animal(){}
	public Animal(Integer userId, String animalName) {
		this.userId = userId;
		this.animalName = animalName;
	}
}

