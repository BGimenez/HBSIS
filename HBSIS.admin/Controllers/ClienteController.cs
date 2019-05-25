using HBSIS.Dominio.Models;
using HBSIS.Repositorio.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HBSIS.admin.Controllers
{
    [Route("api/[Controller]")]
    public class ClienteController : Controller
    {
        private readonly IClienteRepositorio _clienteRepositorio;
        public ClienteController(IClienteRepositorio clienteRepositorio)
        {
            _clienteRepositorio = clienteRepositorio;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_clienteRepositorio.ObterTodos());
                //if (condicao == false)
                //    return BadRequest();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpGet("ObterPorId")]
        public IActionResult ObterPorId(int id)
        {
            try
            {
                return Ok(_clienteRepositorio.ObterPorId(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Cliente cli)
        {
            try
            {
                _clienteRepositorio.Adicionar(cli);

                return Created("api/cliente", cli);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPut]
        public IActionResult Put([FromBody]Cliente cli)
        {
            try
            {
                _clienteRepositorio.Atualizar(cli);

                return Ok(cli);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
