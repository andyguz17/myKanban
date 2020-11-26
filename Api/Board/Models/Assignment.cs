using System;

namespace Board.Models
{
    public class Assignment
    {
        public int AssignmentId { get; set; }
        public string Content { get; set; }
        public string Status { get; set; }
        public DateTime Date { get; set; }
    }
}
