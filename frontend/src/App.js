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
import RegisterCar from './pages/dashboard/car/RegisterCar.page';
import Car from './pages/Car.page';
import Notfound from './pages/NotFound.page';


// Styles
import './App.css';
import EditCar from './pages/dashboard/car/EditCar.page';

function App() {

  const { auth, loading } = useAuth();

  console.log(auth);

  if (loading) return <p>Carregando...</p>

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
              path='/:id'
              element={<Car />}
            />
            <Route
              path='/dashboard/cars/register'
              element={
                auth ?
                  <RegisterCar />
                  : <Navigate to='/dashboard/login' />
              }
            />
            <Route
              path='/dashboard/cars/edit/:id'
              element={
                auth?
                  <EditCar />
                  : <Navigate to='/dashboard/login' />
              }
            />
            <Route
              path='/dashboard/login'
              element={
                !auth ?
                  <Login />
                  : <Navigate to='/' />
              }
            />
            <Route
              path='/dashboard/register'
              element={
                !auth ?
                  <Register />
                  : <Navigate to="/" />
              }
            />
            <Route
              path={'/notfound'}
              element={<Notfound />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
