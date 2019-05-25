using System;
using System.Collections.Generic;
using System.Text;

namespace HBSIS.Dominio.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Cnpj { get; set; }
        public string RazaoSocial { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
