package com.mobilestore.service;

import com.mobilestore.entity.Mobileslist;
import com.mobilestore.repository.MobileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MobileService {

   @Autowired
   private MobileRepository mobileRepository;

    //read
    public List<Mobileslist> getMobiles(){

        List<Mobileslist> mobilesArrayList = new ArrayList<>();

        mobileRepository.findAll()
                .forEach(mobile -> {
                    mobilesArrayList.add(mobile);
                });

        return mobilesArrayList;
    }

    //create
    public Mobileslist createMobiles(Mobileslist mobile) {
        //validate
        return mobileRepository.save(mobile);
    }

    //read by Id
    public Mobileslist getMobilebyID(Integer mobileId) {
        return mobileRepository.findOne(mobileId);
    }

    //update
    public Mobileslist updateMobiles(Mobileslist mobile) {
        //validate
        return mobileRepository.save(mobile);
    }

    //delete
    public String deletebyId(Integer mobileId) {

        mobileRepository.delete(mobileId);
        return "Deleted Successfully";
    }

    //raw-query
    public List<Mobileslist> findAll(String searchText) {
        List<Mobileslist> mobileslists = mobileRepository.findAllMobiles(searchText);
        return mobileslists;
    }
}
