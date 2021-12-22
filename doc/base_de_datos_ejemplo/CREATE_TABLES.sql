-- public.animal definition

-- Drop table

-- DROP TABLE animal;

CREATE TABLE animal (
	user_id int4 NOT NULL DEFAULT nextval('animal_userid_seq'::regclass),
	animal_name text NULL,
	user_name text NULL,
	CONSTRAINT animal_pkey PRIMARY KEY (user_id)
);


-- public.animalimage definition

-- Drop table

-- DROP TABLE animalimage;

CREATE TABLE animalimage (
	id serial4 NOT NULL,
	user_id int4 NULL,
	img_name text NULL,
	bytes bytea NULL,
	img_encoded text NULL,
	img_type varchar NULL,
	CONSTRAINT animalimage_pkey PRIMARY KEY (id)
);


-- public.chatlog definition

-- Drop table

-- DROP TABLE chatlog;

CREATE TABLE chatlog (
	id serial4 NOT NULL,
	message text NULL,
	chatroom_id int4 NULL,
	user_id int4 NULL,
	created_at timestamp NOT NULL,
	CONSTRAINT chatlog_pkey PRIMARY KEY (id)
);


-- public.chatuser definition

-- Drop table

-- DROP TABLE chatuser;

CREATE TABLE chatuser (
	id serial4 NOT NULL,
	user1_id int4 NOT NULL,
	user2_id int4 NOT NULL,
	created_at timestamp NULL,
	CONSTRAINT chatuser_pkey PRIMARY KEY (id)
);


-- public.city definition

-- Drop table

-- DROP TABLE city;

CREATE TABLE city (
	id serial4 NOT NULL,
	"name" text NULL,
	lat float8 NULL,
	lng float8 NULL
);


-- public.userlike definition

-- Drop table

-- DROP TABLE userlike;

CREATE TABLE userlike (
	id serial4 NOT NULL,
	created_at timestamp NULL,
	user1_id int4 NULL,
	user2_id int4 NULL
);


-- public.users definition

-- Drop table

-- DROP TABLE users;

CREATE TABLE users (
	id int4 NOT NULL DEFAULT nextval('user_id_seq'::regclass),
	"name" text NULL,
	slug text NULL,
	email text NULL,
	"password" text NULL,
	birth_date text NULL,
	city_id int4 NULL,
	registered bool NULL,
	created_at timestamp NULL,
	CONSTRAINT user_pkey PRIMARY KEY (id)
);