// Modules
import { Link } from 'react-router-dom';

// Hooks
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// Components
import SubmitButton from '../../../components/SubmitButton.component';
import { register, reset } from '../../../slices/auth.slice';

// Styles
import '../../css/Dashboard.css';

const Register = () => {
  
  // states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const {loading, error} = useSelector((state)=> state.auth);



  // Event Handle
  const handleSubmit = (e) => {
    
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword
    };

    for(const prop in user){
      if(!user[prop]) return;
    }

    console.log(user);

    dispatch(register(user));


  };

  // clean all auth states
  useEffect(
    () => {
      dispatch(reset())
    },
    [dispatch]
  )

  return (
    <div id='register'>
      <h2>Cadastro</h2>
      <p className='subtitle'>Registre um novo administrador</p>
      <form
        onSubmit={handleSubmit}
      >
        <label>
          <span>Nome</span>
          <input
            type="text"
            name="name"
            placeholder='Nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </label>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </label>
        <label>
          <span>Confirme a senha</span>
          <input
            type="password"
            name="confirmPassword"
            placeholder='Confime senha'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required 
          />
        </label>
        <SubmitButton
          error={error}
          loading={loading}
          btnValue="Cadastrar"
        />
      </form>
      <p>Já tem conta admin? <Link to='/dashboard/login'>Clique aqui</Link></p>
    </div>
  )
}

export default Register