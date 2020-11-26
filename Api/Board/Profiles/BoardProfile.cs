using AutoMapper;
using Board.Dtos;
using Board.Models;

namespace Board.Profiles
{
    public class BoardProfile : Profile
    {
        public BoardProfile()
        {
            CreateMap<Assignment, AssignmentDto>();
            CreateMap<AssignmentDto, Assignment>();
        }
    }
}
