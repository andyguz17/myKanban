using System;

namespace Board.Dtos
{
    public class AssignmentDto
    {
        public int AssignmentId { get; set; }
        public string Content { get; set; }
        public string Status { get; set; }
        public DateTime Date { get; set; }
    }
}
