/* Datos de ejemplo para la base de datos de Michiapp 
* @sbellodev
*/

INSERT INTO public.animal (animal_name,user_name) VALUES
	 (NULL,'Adán'),
	 ('Luna','Mr Buno'),
	 ('Mimi','Mr Mimo'),
	 ('Krilin','Mr Krilino'),
	 ('GatoPelo','Mr GatoPelo'),
	 ('Perla','Mr Perle');


INSERT INTO public.chatlog (message,chatroom_id,user_id,created_at) VALUES
	 ('hola que tal',1,10,'2021-10-19 16:29:10'),
	 ('bien',1,11,'2021-10-19 16:29:10'),
	 ('me alegro',1,10,'2021-10-19 16:29:10'),
	 ('te gusta el pescao?',1,10,'2021-10-19 16:29:10'),
	 ('hola',1,11,'2021-10-19 16:29:10'),
	 ('segunda',2,10,'2021-10-19 16:29:10'),
	 ('ultima 3',3,10,'2021-10-19 17:49:33'),
	 ('tercera',3,10,'2021-10-19 17:49:32'),
	 ('subelo',1,10,'2021-12-06 20:35:10.378'),
	 ('abc',1,10,'2021-12-06 20:35:24.132');
INSERT INTO public.chatlog (message,chatroom_id,user_id,created_at) VALUES
	 ('<¡Ha sido Match!>',10,5,'2021-12-07 17:35:21.578'),
	 ('<¡Ha sido Match!>',10,6,'2021-12-07 17:42:04.011'),
	 ('<¡Ha sido Match!>',10,7,'2021-12-07 17:42:24.178'),
	 ('<¡Ha sido Match!>',10,8,'2021-12-07 17:48:32.285'),
	 ('<¡Ha sido Match!>',10,9,'2021-12-07 17:50:33.403'),
	 ('<¡Ha sido Match!>',10,10,'2021-12-07 17:52:35.245'),
	 ('a',1,10,'2021-12-09 11:29:04.919'),
	 ('aa',1,10,'2021-12-09 11:29:06.788'),
	 ('bb',1,10,'2021-12-09 11:29:12.366'),
	 ('a',10,10,'2021-12-09 11:29:35.892');
INSERT INTO public.chatlog (message,chatroom_id,user_id,created_at) VALUES
	 ('<¡Ha sido Match!>',10,12,'2021-12-09 13:09:34.192'),
	 ('<¡Ha sido Match!>',10,13,'2021-12-09 13:10:23.863'),
	 ('<¡Ha sido Match!>',10,14,'2021-12-09 13:10:31.133'),
	 ('<¡Ha sido Match!>',10,15,'2021-12-09 13:10:47.179'),
	 ('aa',2,10,'2021-12-09 13:38:27.46'),
	 ('af',1,10,'2021-12-09 14:54:54.861');


INSERT INTO public.chatuser (user1_id,user2_id,created_at) VALUES
	(10,11,NULL),
	(10,12,NULL),
	(10,13,NULL),
	(10,14,'2021-12-07 17:35:21.552');


INSERT INTO public.userlike (created_at,user1_id,user2_id) VALUES
	 ('2021-11-10 09:21:44',10,13),
	 ('2021-11-10 09:21:43',10,12),
	 ('2021-11-10 09:21:43',10,11),
	 ('2021-11-10 09:21:42',10,10),
	 ('2021-10-28 20:04:51',10,15),
	 ('2021-12-09 13:10:16.536',14,10);


INSERT INTO public.users ("name",slug,email,"password",birth_date,city_id,registered,created_at) VALUES
	 ('Adán',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	 ('Mr Mimi',NULL,NULL,NULL,NULL,3,NULL,NULL),
	 ('Mr Luna',NULL,NULL,NULL,NULL,2,NULL,NULL),
	 ('Mr Krilin',NULL,NULL,NULL,NULL,4,NULL,NULL),
	 ('Mr GatoPelo',NULL,NULL,NULL,NULL,5,NULL,NULL),
	 ('Mr Perle',NULL,NULL,NULL,NULL,9,NULL,NULL);