import About from '../../features/about/about';
import Contact from '../../features/contact/contact';
import Home from '../../features/home/home';
import NotFound from '../../features/not-found/not-found';
import { userRoles } from './constants';
import ProtectedRoute from './protected-route';
import appRoutes from './routes';

const routesConfig = [
  {
    path: appRoutes.HOME,
    element: <Home />,
  },
  {
    path: appRoutes.ABOUT,
    element: (
      <ProtectedRoute expectedRoles={[userRoles.editor]}>
        <About />
      </ProtectedRoute>
    ),
    children: [
      {
        path: appRoutes.ABOUT_HOME,
        element: <Home />,
      },
    ],
  },
  {
    path: appRoutes.CONTACT,
    element: <Contact />,
  },
  {
    path: appRoutes.UNKNOWN,
    element: <NotFound />,
  },
];

export default routesConfig;
