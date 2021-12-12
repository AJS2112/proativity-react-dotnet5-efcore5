using Microsoft.AspNetCore.Mvc;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "Meu primeiro metodo GET";
        }

        [HttpPost]
        public string Post()
        {
            return "Meu primeiro metodo POST";
        }

        [HttpPut]
        public string Put()
        {
            return "Meu primeiro metodo PUT";
        }

        [HttpDelete]
        public string Delete()
        {
            return "Meu primeiro metodo DELETE";
        }
    }
}