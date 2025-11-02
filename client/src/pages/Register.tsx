import { Link } from 'react-router-dom';

// @ts-ignore: third-party JS module without TypeScript declarations
import Wrapper from '../assets/wrappers/RegisterAndLoginPage.ts';
import Logo from '../components/Logo.tsx';
import FormRow from '../components/FormRow.tsx';

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />

        <FormRow
          type="text"
          name="name"
          isRequired={true}
          defaultValue="john"
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          isRequired={true}
          defaultValue="smith"
        />
        <FormRow
          type="text"
          name="earth"
          isRequired={true}
          defaultValue="john"
        />
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
          Already a member?{' '}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
