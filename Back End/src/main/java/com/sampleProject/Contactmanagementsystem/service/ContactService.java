package com.sampleProject.Contactmanagementsystem.service;

import com.sampleProject.Contactmanagementsystem.model.Contact;

import java.util.List;
import java.util.Optional;

public interface ContactService {
    List<Contact>findAllContact();
    Optional<Contact>findById(Long id);
    Contact saveContact(Contact contact);
    void updateContact(Contact contact);
    void deleteById(Long id);
}
