package com.matheuspadilha.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.matheuspadilha.project.entities.Category;


public interface CategoryRepository extends JpaRepository<Category,Long> {

}
