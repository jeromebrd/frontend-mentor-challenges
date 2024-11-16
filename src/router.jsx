import { createBrowserRouter } from 'react-router-dom';
import ChallengesPage from './routes/challenges/ChallengesPage';
import App from './App';
import Homepage from './routes/Homepage';
import QrCode from './routes/challenges/qrcode/QrCode';
import SocialLinkProfile from './routes/challenges/social-link-profile/SocialLinkProfile';
import NotFound from './routes/NotFound';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: '',
          element: <Homepage />,
        },
        {
          path: 'challenges',
          element: <ChallengesPage />,
        },
        {
          path: 'challenges/qrcode',
          element: <QrCode />,
        },
        {
          path: 'challenges/social-link-profile',
          element: <SocialLinkProfile />,
        },
      ],
      future: {
        v7_skipActionErrorRevalidation: true,
      },
    },
  ],
  {
    basename: '/frontend-mentor-challenges', // Chemin de base pour GitHub Pages
  }
);
