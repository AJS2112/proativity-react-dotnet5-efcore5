import './App.css';
import Atividade from "./pages/atividades/Atividade";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Route path='/atividades' component={Atividade} />
      <Route path='/clientes' component={Cliente} />
      <Route path='/home' component={Home} />

    </Router>

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
      <h1>Home</h1>
    </div>
  )
}