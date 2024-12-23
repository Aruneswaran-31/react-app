
import './App.css';
import Home from './components/home/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import News from './components/pages/News';
import Dashboard from './auth/Dashboard';
import Login from './auth/Login';
import Counter from './components/pages/Counter';
import Todo from './components/pages/Todo';
import Feedback from './components/pages/Feedback';
import GameApp from './components/game/GameApp';
import ProtectedRouted from './auth/ProtectedRouted';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRouted';
const App = () => {
  return (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/todo"element={<Todo/>}/>
        <Route path="/news"element={<ProtectedRouted><News/></ProtectedRouted>}/>
        <Route path="/todo"element={<Feedback/>}/>
        <Route path="/game"element={<GameApp/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/dashboard'element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </Router>
  </AuthProvider>
  );
}
                                                                                                                   
export default App;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  