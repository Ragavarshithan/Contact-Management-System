package com.sampleProject.Contactmanagementsystem.controller;

import com.sampleProject.Contactmanagementsystem.exception.ResourceNotFoundException;
import com.sampleProject.Contactmanagementsystem.model.Contact;
import com.sampleProject.Contactmanagementsystem.repository.ContactRepository;
//import com.sampleProject.Contactmanagementsystem.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;



    @GetMapping("/view")
   public  List<Contact>findAllContact(){
        return contactRepository.findAll();
    }


    @PostMapping("/add")
    public  Contact addcontact(@RequestBody Contact contact){
        return contactRepository.save(contact);
    }
@GetMapping("/{id}")
    public ResponseEntity<Contact>getContactById(@PathVariable Long id){
        Contact contact = contactRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("invalid id" + id));
        return ResponseEntity.ok(contact);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Contact> updateContact(@PathVariable long id,@RequestBody Contact contactDetails) {
        Contact updateContact = contactRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Contact not exist with id: " + id));

        updateContact.setFirstName(contactDetails.getFirstName());
        updateContact.setLastName(contactDetails.getLastName());
        updateContact.setPhoneNumber(contactDetails.getPhoneNumber());
        updateContact.setEmailId(contactDetails.getEmailId());
        updateContact.setDob((Date) contactDetails.getDob());
        updateContact.setAddress(contactDetails.getAddress());

        contactRepository.save(updateContact);

        return ResponseEntity.ok(updateContact);
    }
}
