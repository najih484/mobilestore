package com.mobilestore.entity;

import javax.persistence.*;

@Entity
public class Mobileslist {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String model;
    private String brand;
    private Integer release_year;
    private Integer price;

    public Mobileslist(){

    }

    public Mobileslist(Integer id, String model, String brand, Integer release_year, Integer price) {
        this.id = id;
        this.model = model;
        this.brand = brand;
        this.release_year = release_year;
        this.price = price;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Integer getRelease_year() {
        return release_year;
    }

    public void setRelease_year(Integer release_year) {
        this.release_year = release_year;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
