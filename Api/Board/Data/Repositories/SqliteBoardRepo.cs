using Board.Data.Interfaces;
using Board.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Board.Data.Repositories
{
    public class SqliteBoardRepo : IBoardRepo
    {
        private readonly BoardContext _context;

        public SqliteBoardRepo(BoardContext context)
        {
            _context = context;
        }

        //POST assignment
        public async Task CreateNewAssignment(Assignment assignment)
        {
            assignment.Date = DateTime.Now;
            _context.Assignments.Add(assignment);
            await _context.SaveChangesAsync();
        }

        //DELETE assignment
        public async Task<bool> DeleteAssignment(int id)
        {
            var currentAssignment = await GetAssignmentById(id);
            _context.Assignments.Remove(currentAssignment);

            var rows = await _context.SaveChangesAsync();
            return rows > 0;
        }

        //GET ALL
        public async Task<IEnumerable<Assignment>> GetAllAssignments()
        {
            var assignments = await _context.Assignments.ToListAsync();
            return assignments;
        }

        //GET assignment
        public async Task<Assignment> GetAssignmentById(int id)
        {
            var assignment = await _context.Assignments.FirstOrDefaultAsync(x => x.AssignmentId == id);
            return assignment; 
        }

        //PUT 
        public async Task<bool> UpdateAssignment(Assignment assignment)
        {
            var currentAssignment = await GetAssignmentById(assignment.AssignmentId);
            currentAssignment.Content = assignment.Content;
            currentAssignment.Status = assignment.Status;
            currentAssignment.Date = DateTime.Now;

            var rows = await _context.SaveChangesAsync();
            return rows > 0;
        }
    }
}
