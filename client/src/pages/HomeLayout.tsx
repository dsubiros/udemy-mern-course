import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      {/* <nav className="h1">navbar</nav> */}
      <nav>navbar</nav>

      <Outlet />
    </>
  );
};
export default HomeLayout;
