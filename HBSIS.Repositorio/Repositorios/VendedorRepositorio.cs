using HBSIS.Dominio.Models;
using HBSIS.Repositorio.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace HBSIS.Repositorio.Repositorios
{
    public class VendedorRepositorio : BaseRepositorio<Vendedor>, IVendedorRepositorio
    {
        public VendedorRepositorio(HbsisContexto contexto) : base(contexto)
        {
        }
    }
}
