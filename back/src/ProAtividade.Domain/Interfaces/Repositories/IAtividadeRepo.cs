using System.Threading.Tasks;
using ProAtividade.Domain.Entities;

namespace ProAtividades.Domain.Interfaces.Repositories
{
    public interface IAtividadeRepo : IGeneralRepo
    {
        Task<Atividade[]> PegaTodasAsync();
        Task<Atividade> PegaPorIdAsync(int id);
        Task<Atividade> PegaPorTituloAsync(string titulo);
    }
}
