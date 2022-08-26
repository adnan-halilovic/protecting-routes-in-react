import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import appRoutes from '../../core/routes/routes';

const About = () => {
  return (
    <>
      <h2>About us!</h2>
      <Link to={appRoutes.ABOUT_HOME}>Home</Link>
      <Outlet />
    </>
  );
};

export default About;
