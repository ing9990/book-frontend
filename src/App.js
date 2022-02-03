import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/book/home';
import saveForm from './components/pages/book/saveForm';
import detail from './components/pages/book/detail';
import loginForm from './components/pages/user/loginForm';
import joinForm from './components/pages/user/joinForm';
import updateForm from './components/pages/book/updateForm';
import home from './components/pages/book/home';

function App() {
  return (
    <div>
      <Header />
      <Container>
            <Route path='/' exact={true} component={home} />
            <Route path='/saveForm' exact={true} component={saveForm} />
            <Route path='/book/:id' exact={true} component={detail} />
            <Route path='/loginForm' exact={true} component={loginForm} />
            <Route path='/joinForm' exact={true} component={joinForm} />
            <Route path='/updateForm/:id' exact={true} component={updateForm} />
      </Container>
    </div>

  );
}

export default App;
