using InternshipApp_BackEnd.Data;
using InternshipApp_BackEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InternshipApp_BackEnd.Controllers
{
    [Route("api")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        private readonly ToDoDbContext _dbContext;
        public ToDoController(ToDoDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet, Route("GetAllToDos")]
        public async Task<List<ToDoModel>> GetAllToDos()
        {
            return await _dbContext.ToDos.ToListAsync();
        }


        [HttpGet, Route("GetToDo/{Id}")]
        public async Task<ToDoModel> GetToDo(int? Id)
        {
            return await _dbContext.ToDos.Where(x => x.Id == Id).FirstOrDefaultAsync();
        }


        [HttpPost, Route("AddToDo")]
        public async Task<IActionResult> AddToDo([FromBody] ToDoModelDto todoModel)
        {
            var newToDo = new ToDoModel() { 
                ToDoName = todoModel.ToDoName,
                ToDoDescription = todoModel.ToDoDescription
            };
            await _dbContext.ToDos.AddAsync(newToDo);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
