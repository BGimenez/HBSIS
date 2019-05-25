using HBSIS.Dominio.Models;
using HBSIS.Repositorio.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace HBSIS.Repositorio.Repositorios
{
    public class ClienteRepositorio : BaseRepositorio<Cliente>, IClienteRepositorio
    {
        public ClienteRepositorio(HbsisContexto contexto) : base(contexto)
        {
        }
    }
}
