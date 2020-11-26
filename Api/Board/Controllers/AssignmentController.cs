using AutoMapper;
using Board.Data.Interfaces;
using Board.Dtos;
using Board.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Board.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignmentController : ControllerBase
    {
        //Dependency Injection
        private readonly IBoardRepo _repository;
        private readonly IMapper _mapper;

        public AssignmentController(IBoardRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        //Http Requests
        [HttpGet]
        public async Task<ActionResult> GetAllAssignments()
        {
            var items = await _repository.GetAllAssignments();
            var itemsDto = _mapper.Map<IEnumerable<AssignmentDto>>(items);

            return Ok(itemsDto);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetAssignmentById(int id)
        {
            var item = await _repository.GetAssignmentById(id);
            var itemDto = _mapper.Map<AssignmentDto>(item);
            if (itemDto != null)
            {
                return Ok(itemDto);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult> CreateNewAssignment(Assignment assignmnet)
        {
            var newItem = _mapper.Map<Assignment>(assignmnet);
            await _repository.CreateNewAssignment(newItem);

            var readItem = _mapper.Map<AssignmentDto>(newItem);
            return Ok(readItem);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateAssignment(int id, Assignment assignment)
        {
            var modifyItem = _mapper.Map<Assignment>(assignment);
            modifyItem.AssignmentId = id;

            var result = await _repository.UpdateAssignment(modifyItem);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAssignment(int id)
        {
            var result = await _repository.DeleteAssignment(id);
            return Ok(result);
        }
    }
}
