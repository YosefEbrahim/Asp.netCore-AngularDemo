using Domain.Entities;
using Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class ContactsController : ControllerBase
    {

        private readonly IContactRepository _contactRepository;

        public ContactsController(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        [HttpPost]
        public async Task<IActionResult> AddContact([FromBody] Contact contact)
        {
            await _contactRepository.AddContact(contact);
            return Ok();
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetContactById(int id)
        {
           var contact = await _contactRepository.GetContactById(id);
            return Ok(contact);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditContact(int id, Contact contact)
        {
            await _contactRepository.EditContact(id,contact);
            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveContact(int id)
        {
            await _contactRepository.RemoveContact(id);
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAllContacts()
        {
            var contacts = await _contactRepository.GetAllContacts();
            return Ok(contacts);
        }

        [HttpGet("search")]
        public async Task<IActionResult> SearchContacts([FromQuery] string searchTerm)
        {
            var contacts = await _contactRepository.SearchContacts(searchTerm);
            return Ok(contacts);
        }
    }
}
