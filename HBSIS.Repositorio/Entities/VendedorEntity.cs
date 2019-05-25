using HBSIS.Dominio.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace HBSIS.Repositorio.Entities
{
    public class VendedorEntity : IEntityTypeConfiguration<Vendedor>
    {
        public void Configure(EntityTypeBuilder<Vendedor> builder)
        {
            builder.HasKey(v => v.Id);
            builder.HasIndex(v => v.Cpf)
                .IsUnique();
            builder.Property(v => v.Nome)
                .IsRequired()
                .HasMaxLength(100);
            builder.Property(v => v.Latitude)
                .IsRequired();
            builder.Property(v => v.Longitude)
                .IsRequired();
        }
    }
}
