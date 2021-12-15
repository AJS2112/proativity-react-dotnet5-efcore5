using System.Threading.Tasks;
using ProAtividade.Domain.Entities;
using ProAtividades.Domain.Interfaces.Repositories;

namespace ProAtividade.Data.Repositories
{
    public class AtividadeRepo : GeneralRepo, IAtividadeRepo
    {
        public Task<Atividade> PegaPorIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<Atividade> PegaPorTituloAsync(string titulo)
        {
            throw new System.NotImplementedException();
        }

        public Task<Atividade[]> PegaTodasAsync()
        {
            throw new System.NotImplementedException();
        }


    }
}