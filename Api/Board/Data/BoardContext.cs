using Board.Data.Configuration;
using Board.Models;
using Microsoft.EntityFrameworkCore;

namespace Board.Data
{
    public class BoardContext:DbContext
    {
        public BoardContext()
        {
                
        }

        public BoardContext(DbContextOptions<BoardContext> options): base(options)
        {

        }

        public DbSet<Assignment> Assignments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Builder for any table
            modelBuilder.ApplyConfiguration(new AssignmentConfig());
        }
    }
}
