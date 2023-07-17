package com.sampleProject.Contactmanagementsystem.controller;

import com.sampleProject.Contactmanagementsystem.model.Contact;
import com.sampleProject.Contactmanagementsystem.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;
@GetMapping("/list")
    List<Contact>getAllContacts(){
        return contactRepository.findAll();
    }
}