import { createBrowserRouter } from 'react-router-dom';
import ChallengesPage from './routes/challenges/ChallengesPage';
import App from './App';
import Homepage from './routes/Homepage';
import QrCode from './routes/challenges/qrcode/QrCode';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
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
    ],
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  },
]);
