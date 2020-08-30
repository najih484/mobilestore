package com.mobilestore.controller;

import com.mobilestore.entity.Mobileslist;
import com.mobilestore.service.MobileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MobileController {

    @Autowired
    private MobileService mobileService;

    @RequestMapping(value = "/mobiles")
    public List<Mobileslist> getMobiles(){

        return mobileService.getMobiles();

    }

    @RequestMapping(value = "/mobiles", method = RequestMethod.POST)
    public Mobileslist createMobiles(@RequestBody Mobileslist mobile){
        return mobileService.createMobiles(mobile);
    }

    @RequestMapping(value = "/mobiles/{id}")
    public Mobileslist getMobileById(@PathVariable("id") Integer mobileId){
        return mobileService.getMobilebyID(mobileId);
    }

    @RequestMapping(value = "/mobiles", method = RequestMethod.PUT)
    public Mobileslist updateMobiles(@RequestBody Mobileslist mobile){
        return mobileService.updateMobiles(mobile);
    }

    @RequestMapping(value ="/mobiles/{mobileId}", method = RequestMethod.DELETE)
    public String deleteById(@PathVariable Integer mobileId){
        return mobileService.deletebyId(mobileId);
    }

    @RequestMapping(value ="/search/{searchText}")
    public List<Mobileslist> findAll(@PathVariable String searchText){
        return mobileService.findAll(searchText);
    }
}
