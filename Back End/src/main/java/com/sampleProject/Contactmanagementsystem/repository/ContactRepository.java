package com.sampleProject.Contactmanagementsystem.repository;

import com.sampleProject.Contactmanagementsystem.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface ContactRepository extends JpaRepository<Contact,Long> {
}
