using System.Threading.Tasks;
using ProAtividade.Domain.Entities;

namespace ProAtividades.Domain.Interfaces.Repositories
{
    public interface IAtividadeRepo
    {
        Task<Atividade[]> PegaTodasAsync();
        Task<Atividade[]> PegaPorIdAsync();
        Task<Atividade[]> PegaPorTituloAsync();
    }
}
