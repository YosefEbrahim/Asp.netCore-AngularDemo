using Domain.Entities;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Model.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Services
{
    public class ContactRepository : IContactRepository
    {
        private readonly ApplicationDbContext _context;

        public ContactRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddContact(Contact contact)
        {
            _context.Contacts.Add(contact);
            await _context.SaveChangesAsync(); 
        }


        public async Task RemoveContact(int id)
        {
            var contact = await _context.Contacts.FindAsync(id);
            if (contact != null)
            {
                _context.Contacts.Remove(contact);
                await _context.SaveChangesAsync(); 
            }
        }


        public async Task<List<Contact>> GetAllContacts()
        {
            return await _context.Contacts.ToListAsync();
        }


        public async Task<List<Contact>> SearchContacts(string searchTerm)
        {
            return await _context.Contacts
                .Where(c => c.Name.Contains(searchTerm) || c.PhoneNumber.Contains(searchTerm) || c.Email.Contains(searchTerm))
                .ToListAsync();
        }

        public async Task<Contact> GetContactById(int id)
        {
            var contact = await _context.Contacts.FindAsync(id);
            if (contact != null)
            {
                return contact;

            }
            return null;
        }

        public async Task EditContact(int id,Contact updcontact)
        {
            var contact = await _context.Contacts.FindAsync(id);
            if (contact != null)
            {
                contact.Name = updcontact.Name;
                contact.Email = updcontact.Email;
                contact.PhoneNumber = updcontact.PhoneNumber;
                 _context.Update(contact);
                 await _context.SaveChangesAsync();

            }
           
        }
    }

}
