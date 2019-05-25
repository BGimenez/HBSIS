using HBSIS.Dominio.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace HBSIS.Repositorio.Entities
{
    public class ClienteEntity : IEntityTypeConfiguration<Cliente>
    {
        public void Configure(EntityTypeBuilder<Cliente> builder)
        {
            builder.HasKey(c => c.Id);
            builder.HasIndex(c => c.Cnpj)
                .IsUnique();
            builder.Property(c => c.RazaoSocial)
                .IsRequired()
                .HasMaxLength(100);
            builder.Property(c => c.Latitude)
                .IsRequired();
            builder.Property(c => c.Longitude)
                .IsRequired();
        }
    }
}
