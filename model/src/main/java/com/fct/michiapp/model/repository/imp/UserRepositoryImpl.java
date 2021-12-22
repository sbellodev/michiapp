package com.fct.michiapp.model.repository.imp;

import com.fct.michiapp.model.entities.queries.UserAnimalData;
import com.fct.michiapp.model.entities.queries.UserData;
import com.fct.michiapp.model.entities.queries.UserSettingsData;
import com.fct.michiapp.model.repository.UserRepositoryCustom;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

public class UserRepositoryImpl implements UserRepositoryCustom {

    @PersistenceContext
    EntityManager em;

    @Override
    public List<UserAnimalData> findNearUsers(String userCity) {
        Query q = em.createNativeQuery(
                "SELECT u.id, u.name, a.animal_name, ai.img_array, ai.img_type, d.distance as distance " +
                        "FROM (SELECT user_id, array_to_string(array_agg(img_encoded), ',') AS img_array, " +
                        "array_to_string(array_agg(img_type), ',') AS img_type " +
                        "FROM AnimalImage GROUP BY user_id) ai " +
                        "INNER JOIN Animal a ON (a.user_id = ai.user_id) " +
                        "INNER JOIN users u  ON (u.id = ai.user_id) " +
                        "INNER JOIN (SELECT c1.id, c1.name AS name1, c2.name AS name2, distance(c1.lat, c2.lat, c1.lng, c2.lng) AS distance " +
                        "FROM City c1, City c2 " +
                        "WHERE c2.name LIKE ?1 " +
                        ") AS d ON (d.id = u.city_id) "
                , "UserAnimalDataMapping");
        q.setParameter(1, userCity);
        try {
            return (List<UserAnimalData>) q.getResultList();
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public UserData getUserById(Integer userId) {
       Query q = em.createNativeQuery(
               "SELECT u.id, u.name, u.slug, u.email, u.birth_date, u.created_at, " +
               "u.registered, c.name as city_name " +
               "FROM users u " +
               "LEFT JOIN city c ON (c.id = u.city_id) " +
               "WHERE u.id = ?1",
               "UserExtendedMapping");
        q.setParameter(1, userId);
        try {
            return (UserData) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public UserSettingsData getUserSettingsDataById(Integer userId) {
        Query q = em.createNativeQuery(
                "SELECT u.id, u.name, a.animal_name, ai.img_encoded, ai.img_type, c.name AS city_name " +
                        "FROM users u " +
                        "INNER JOIN Animal a ON a.user_id = u.id " +
                        "INNER JOIN (SELECT user_id, img_encoded, img_type " +
                        "FROM AnimalImage " +
                        "WHERE user_id = ?1 " +
                        "ORDER BY id DESC " +
                        "LIMIT 1) " +
                        "ai ON ai.user_id = u.id " +
                        "LEFT JOIN City c ON c.id = u.city_id " +
                        "WHERE u.id = ?1 ",
                "UserSettingsDataMapping");

        q.setParameter(1, userId);
        try {
            return (UserSettingsData) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public UserAnimalData getUserFiles(Integer userId) {
        Query q = em.createNativeQuery(
    "SELECT u.id, u.name, a.animal_name, ai.img_id_array, ai.img_array, ai.img_type " +
            "FROM (SELECT  array_to_string(array_agg(id), ',') as img_id_array, " +
            "user_id, array_to_string(array_agg(img_encoded), ',') AS img_array, " +
            "array_to_string(array_agg(img_type), ',') AS img_type from animalimage a " +
            "WHERE user_id = ?1 " +
            "GROUP BY user_id) ai " +
            "INNER JOIN users u ON (u.id = ai.user_id) " +
            "INNER JOIN animal a ON (a.user_id = ai.user_id)",
            "SingleUserAnimalDataMapping");
        q.setParameter(1, userId);
        try {
            return (UserAnimalData) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }
}
