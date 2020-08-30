package com.mobilestore.repository;

import com.mobilestore.entity.Mobileslist;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface MobileRepository extends CrudRepository<Mobileslist,Integer> {
    @Query(nativeQuery = true,value = "select * FROM Mobileslist m WHERE m.brand = :searchText OR m.model = :searchText")
    List<Mobileslist> findAllMobiles(@Param("searchText") String searchText);

}
