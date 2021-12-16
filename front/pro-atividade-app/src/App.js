import './App.css';
import Atividade from "./pages/atividades/Atividade";
import { Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Route path='/atividades' component={Atividade} />
      <Route path='/clientes' component={Cliente} />
      <Route path='/home' component={Home} />
    </>
  );
}


const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

const Cliente = () => {
  return (
    <div>
      <h1>Cliente</h1>
    </div>
  )
}