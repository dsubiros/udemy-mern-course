import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage.ts';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Oops! Page not found</h3>
          <p>we can't seem to find the page you are looking for</p>
          <Link to="/dashboard">Go Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h2>Oops, something went wrong</h2>
        <br />
        <Link to="/">Go Back Home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
