using Board.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Board.Data.Interfaces
{
    public interface IBoardRepo
    {
        Task<IEnumerable<Assignment>> GetAllAssignments();
        Task<Assignment> GetAssignmentById(int id);
        Task CreateNewAssignment(Assignment assignment);
        Task<bool> UpdateAssignment(Assignment assignment);
        Task<bool> DeleteAssignment(int id);
    }
}
