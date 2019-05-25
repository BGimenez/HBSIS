using System;
using System.Collections.Generic;
using System.Text;

namespace HBSIS.Dominio.Models
{
    public class Vendedor
    {
        public int Id { get; set; }
        public string Cpf { get; set; }
        public string Nome { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
