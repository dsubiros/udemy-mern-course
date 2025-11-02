import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage.ts';
import Logo from '../components/Logo.tsx';
import FormRow from '../components/FormRow.tsx';

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />

        <FormRow
          type="text"
          name="email"
          isRequired={true}
          defaultValue="john@gmail.com"
        />
        <FormRow
          type="password"
          name="password"
          isRequired={true}
          defaultValue="secret123"
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>

        <p>
          Not a member yet?{' '}
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
