using System;
using System.Threading.Tasks;
using ProAtividade.Domain.Entities;
using ProAtividades.Domain.Interfaces.Repositories;
using ProAtividades.Domain.Interfaces.Services;

namespace ProAtividade.Domain.Services
{
    public class AtividadeService : IAtividadeService
    {
        private readonly IAtividadeRepo _atividadeRepo;
        public AtividadeService(IAtividadeRepo atividadeRepo)
        {
            _atividadeRepo = atividadeRepo;

        }
        public async Task<Atividade> AdicionarAtividadeAsync(Atividade model)
        {
            if (await _atividadeRepo.PegaPorTituloAsync(model.Titulo) != null)
                throw new Exception("Já existe uma atividade com esse titulo");

            if (await _atividadeRepo.PegaPorIdAsync(model.Id) == null)
            {
                _atividadeRepo.Adicionar(model);
                if (await _atividadeRepo.SalvarMudancasAsync())
                    return model;
            }

            return null;
        }

        public async Task<Atividade> AtualizarAtividadeAsync(Atividade model)
        {
            if (model.DataConclusao != null)
                throw new Exception("Não se pode alterar a atividade ja concluida");

            if (await _atividadeRepo.PegaPorIdAsync(model.Id) != null)
            {
                _atividadeRepo.Atualizar(model);
                if (await _atividadeRepo.SalvarMudancasAsync())
                    return model;
            }

            return null;
        }

        public async Task<bool> ConcluirAtividadeAsync(Atividade model)
        {
            if (model != null)
            {
                model.Concluir();
                _atividadeRepo.Atualizar(model);
                return await _atividadeRepo.SalvarMudancasAsync();
            }


            return false;
        }

        public async Task<bool> DeletarAtividadeAsync(int atividadeId)
        {
            var atividade = await _atividadeRepo.PegaPorIdAsync(atividadeId);

            if (atividade == null)
                throw new Exception("Atividade que tentou deletar não existe");

            _atividadeRepo.Deletar(atividade);
            return await _atividadeRepo.SalvarMudancasAsync();
        }

        public async Task<Atividade> PegarAtividadePorIdAsync(int id)
        {
            try
            {
                var atividade = await _atividadeRepo.PegaPorIdAsync(id);
                if (atividade == null) return null;

                return atividade;
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }

        public async Task<Atividade[]> PegarTodasAtividadesAsync()
        {
            try
            {
                return await _atividadeRepo.PegaTodasAsync();
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }
    }
}