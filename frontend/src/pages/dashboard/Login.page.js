// Module
import { Link } from "react-router-dom";

// Components
import Message from '../../components/Message.component';

// Hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


// Redux
import { login, reset } from '../../slices/auth.slice';
import SubmitButton from "../../components/SubmitButton.component";

// Styles


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {

    e.preventDefault();

    const user = {
      email,
      password
    };

    dispatch(login(user));

  };

  // clean all auth states
  useEffect(
    () => {
      dispatch(reset());
    },
    [dispatch]
  );

  return (
    <div id="login">
      <h2>Login</h2>
      <p className="subtitle">Faça o login para acessar o dashboard</p>
      <form
        onSubmit={handleSubmit}
      >
        <label>
          <span>Usuário</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
        </label>
        <SubmitButton
          error={error}
          loading={loading}
          btnValue="Login"
        />
      </form>
      <p>Não tem uma conta? <Link to='/dashboard/register'>Clique aqui</Link></p>
    </div>
  )
}

export default Login