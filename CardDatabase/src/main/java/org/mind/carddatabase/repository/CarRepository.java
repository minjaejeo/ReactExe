package org.mind.carddatabase.repository;


import org.mind.carddatabase.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/*
Rest Repository 설정에 의해
이 CarRepository는 json Controller의 역할을 한다.
1. 전체 조희
    GET -
 */

public interface CarRepository extends JpaRepository<Car, Long> {
    List<Car> findByBrand(@Param("brand") String brand);

    List<Car> findByColor(@Param("color") String color);
}
