using System.Threading.Tasks;
using ProAtividade.Domain.Entities;

namespace ProAtividades.Domain.Interfaces.Services
{
    public interface IAtividadeService
    {
        Task<Atividade> AdicionarAtividadeAsync(Atividade model);
        Task<Atividade> AtualizarAtividadeAsync(Atividade model);
        Task<bool> DeletarAtividadeAsync(int atividadeId);
        Task<bool> ConcluirAtividadeAsync(Atividade model);


        Task<Atividade[]> PegarTodasAtividadesAsync();
        Task<Atividade> PegarAtividadePorIdAsync(int id);

    }
}
