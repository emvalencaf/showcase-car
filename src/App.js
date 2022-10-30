//react
  //react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer';

//pages
import Home from './pages/Home.page';
import About from './pages/About.page';
import Login from './pages/Login.page';
import Register from './pages/Register.page';

//styles
import './App.css';
import Cars from './pages/Cars.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className='container'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/about'
              element={<About />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/register'
              element={<Register />}
            />
            <Route
              path='/cars'
              element={<Cars />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
