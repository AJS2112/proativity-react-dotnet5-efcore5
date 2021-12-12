import './App.css';

function App() {
  const atividades = [
    { id: 1, descricao: "Primeira atividade" },
    { id: 2, descricao: "Segunda atividade" }

  ];
  return (
    <>
      <form>
        <input id="descricao" type="text" placeholder="id" />
        <input id="descricao" type="text" placeholder="id" />
        <button>+ Atividade</button>
      </form>
      <div className="mt-3">
        <h1>React .NETCore EfCore</h1>
        <ul className='list-group'>
          {atividades.map(a => (
            <li key={a.id} className='list-group-item'>{a.descricao}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
