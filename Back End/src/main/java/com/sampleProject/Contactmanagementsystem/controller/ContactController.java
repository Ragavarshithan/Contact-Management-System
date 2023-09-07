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

    @PatchMapping("/{id}")
    public void updateContact(@PathVariable long id,@RequestBody Contact contactDetails) {
        Contact updateContact = contactRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Contact not exist with id: " + id));
        System.out.println("Id : "+ updateContact.getId());

        updateContact.setFirstName(contactDetails.getFirstName());
        updateContact.setLastName(contactDetails.getLastName());
        updateContact.setEmailId(contactDetails.getEmailId());
        updateContact.setAddress(contactDetails.getAddress());
        updateContact.setDob((Date) contactDetails.getDob());
        updateContact.setPhoneNumber(contactDetails.getPhoneNumber());


        contactRepository.save(updateContact);

        //return ResponseEntity.ok(updateContact);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteContact(@PathVariable long id){

        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("contact not exist with id: " + id));

        contactRepository.delete(contact);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
