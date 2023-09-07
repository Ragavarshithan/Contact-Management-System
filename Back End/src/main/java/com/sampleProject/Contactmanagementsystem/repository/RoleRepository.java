package com.sampleProject.Contactmanagementsystem.repository;

import java.util.Optional;

import com.sampleProject.Contactmanagementsystem.model.ERole;
import com.sampleProject.Contactmanagementsystem.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
