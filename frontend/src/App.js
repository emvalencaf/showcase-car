//react
//react router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Hooks
import { useAuth } from './hooks/useAuth.hook';
// Components
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';

// Pages
import Home from './pages/Home.page';
import Login from './pages/dashboard/user/Login.page';
import Register from './pages/dashboard/user/Register.page';
import CarRegister from './pages/dashboard/car/CarRegister.page';
import CarEdit from './pages/dashboard/car/CarEdit.page';

// Styles
import './App.css';

function App() {

  const { auth, loading } = useAuth();

  console.log(loading);

  if(loading) return <p>Carregando...</p>

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
              path='/dashboard/cars/register'
              element={auth? <CarRegister />:<Navigate to='/dashboard/login'/>}
            />
            <Route
              path='/dashboard/cars/edit'
              element={auth? <CarEdit />:<Navigate to='/dashboard/login' />}
            />
            <Route
              path='/dashboard/login'
              element={<Login />}
            />
            <Route
              path='/dashboard/register'
              element={<Register />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
