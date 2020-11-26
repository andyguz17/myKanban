using Board.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Board.Data.Configuration
{
    public class AssignmentConfig : IEntityTypeConfiguration<Assignment>
    {
        public void Configure(EntityTypeBuilder<Assignment> builder)
        {
            //Map the entities
            builder.ToTable("Assignment");

            builder.HasKey(e => e.AssignmentId);

            builder.Property(e => e.Content)
                .HasMaxLength(250)
               .IsRequired();

            builder.Property(e => e.Status)
                .IsRequired();

            builder.Property(e => e.Date)
                .IsRequired();
        }
    }
}
