using HBSIS.Repositorio.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HBSIS.Repositorio.Repositorios
{
    public class BaseRepositorio<T> : IBaseRepositorio<T> where T : class
    {
        protected readonly HbsisContexto Contexto;

        public BaseRepositorio(HbsisContexto contexto)
        {
            Contexto = contexto;
        }

        public void Adicionar(T obj)
        {
            Contexto.Set<T>().Add(obj);
            Contexto.SaveChanges();
        }

        public void Atualizar(T obj)
        {
            Contexto.Set<T>().Update(obj);
            Contexto.SaveChanges();
        }

        public T ObterPorId(int id)
        {
            return Contexto.Set<T>().Find(id);
        }

        public IEnumerable<T> ObterTodos()
        {
            return Contexto.Set<T>().ToList();
        }

        public void Remover(T obj)
        {
            Contexto.Set<T>().Remove(obj);
            Contexto.SaveChanges();
        }

        public void Dispose()
        {
            Contexto.Dispose();
        }
    }
}
