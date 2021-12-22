package com.fct.michiapp.model.repository.imp;

import com.fct.michiapp.model.repository.AnimalImageRepositoryCustom;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

public class AnimalImageRepositoryImpl implements AnimalImageRepositoryCustom {

    @PersistenceContext
    EntityManager em;

    @Override
    @Transactional
    public void saveFile(Integer user_id, String name, byte[] bytes, String type) {
        Query q = em.createNativeQuery(
                "INSERT INTO animalimage (user_id, img_name, img_encoded, img_type) " +
                        "VALUES ( ?1 , ?2, encode( ?3 , 'base64') , ?4 ) ",
                "FileDataMapping");
        q.setParameter(1, user_id);
        q.setParameter(2, name);
        q.setParameter(3, bytes);
        q.setParameter(4, type);
        q.executeUpdate();
    }

    @Override
    @Transactional
    public void deleteFile(Integer id) {
        Query q = em.createNativeQuery(
                "DELETE FROM animalimage WHERE id = ?1 ",
                "FileDataMapping");
        q.setParameter(1, id);
        q.executeUpdate();
    }
}
