using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IContactRepository
    {
        Task AddContact(Contact contact);
        Task<Contact> GetContactById(int id);
        Task RemoveContact(int id);
        Task EditContact(int id, Contact contact);
        Task<List<Contact>> GetAllContacts();
        Task<List<Contact>> SearchContacts(string searchTerm);
    }
}
