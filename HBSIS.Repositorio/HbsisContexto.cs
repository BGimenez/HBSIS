using HBSIS.Dominio.Models;
using HBSIS.Repositorio.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace HBSIS.Repositorio
{
    public class HbsisContexto : DbContext
    {
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Vendedor> Vendedores { get; set; }

        public HbsisContexto(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ClienteEntity());
            modelBuilder.ApplyConfiguration(new VendedorEntity());


            base.OnModelCreating(modelBuilder);
        }
    }
}
