package com.sampleProject.Contactmanagementsystem.service;

import com.sampleProject.Contactmanagementsystem.model.Contact;
import com.sampleProject.Contactmanagementsystem.repository.ContactRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceimpl implements ContactService {
    private final ContactRepository contactRepository;

    public ContactServiceimpl(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public List<Contact> findAllContact() {
        return contactRepository.findAll();
    }

    @Override
    public Optional<Contact> findById(Long id) {
        return contactRepository.findById(id);
    }

    @Override
    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public void updateContact(Contact contact) {

    }

    @Override
    public void deleteById(Long id) {

    }
}
