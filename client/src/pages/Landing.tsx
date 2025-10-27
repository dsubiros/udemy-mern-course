import { styled } from 'styled-components';

// @ts-ignore: third-party JS module without TypeScript declarations
import Wrapper from '../assets/wrappers/LandingPage';

import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify logo" className="logo" />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos a
            dolores impedit deserunt maxime fugiat, modi itaque porro architecto
            eius, voluptate excepturi tempore ea fuga. Minus ratione quisquam
            repellat!
          </p>

          <Link to={'/register'} className="btn register-link">
            Register
          </Link>
          <Link to={'/login'} className="btn login-link">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

// const Wrapper = styled.div`
//   background: red;

//   h1 {
//     color: white;
//   }

//   .content {
//     background: blue;
//     color: yellow;
//   }
// `;

export default Landing;
