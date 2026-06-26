import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from './app/routes';

function App() {
  const routing = useRoutes(routes());
  return routing
}

export default App;
