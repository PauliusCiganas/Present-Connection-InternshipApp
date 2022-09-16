using InternshipApp_BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace InternshipApp_BackEnd.Data
{
    public class ToDoDbContext : DbContext
    {
        public ToDoDbContext(DbContextOptions<ToDoDbContext> options) : base(options) { }

        public DbSet<ToDoModel> ToDos { get; set; }
    }
}
