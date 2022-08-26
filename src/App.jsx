import { BrowserRouter as Router, Link } from 'react-router-dom';

import RouteRenderer from './core/routes/route-renderer';

import './App.css';
import appRoutes from './core/routes/routes';

function App() {
  return (
    <Router>
      <Link to={appRoutes.HOME}>Home</Link>
      <Link to={appRoutes.ABOUT}>About</Link>
      <Link to={appRoutes.CONTACT}>Contact</Link>
      <RouteRenderer />
    </Router>
  );
}

export default App;
