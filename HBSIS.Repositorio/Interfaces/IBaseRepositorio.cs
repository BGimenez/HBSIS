using System;
using System.Collections.Generic;
using System.Text;

namespace HBSIS.Repositorio.Interfaces
{
    public interface IBaseRepositorio<T> : IDisposable where T : class
    {
        void Adicionar(T obj);
        T ObterPorId(int id);
        IEnumerable<T> ObterTodos();
        void Atualizar(T obj);
        void Remover(T obj);
    }
}
