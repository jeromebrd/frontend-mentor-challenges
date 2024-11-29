import { createHashRouter } from 'react-router-dom';
import ChallengesPage from './routes/challenges/ChallengesPage';
import App from './App';
import Homepage from './routes/Homepage';
import QrCode from './routes/challenges/qrcode/QrCode';
import SocialLinkProfile from './routes/challenges/social-link-profile/SocialLinkProfile';
import NotFound from './routes/NotFound';
import FaqAccordion from './routes/challenges/faq-accordion/FaqAccordion';
import BlogPreviewCard from './routes/challenges/blog-preview-card/BlogPreviewCard';
import PricingToggle from './routes/challenges/pricing-toggle/PricingToggle';
import TodoApp from './routes/challenges/todo-app/TodoApp';
import InteractiveRating from './routes/challenges/interactive-rating/InteractiveRating';
import MortgageRepayment from './routes/challenges/mortgage-repayment-calculator/MortgageRepayment';

// createHashRouter a la place de createBrowserRouter pour github page
export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
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
      {
        path: 'challenges/faq-accordion',
        element: <FaqAccordion />,
      },
      {
        path: 'challenges/blog-preview-card',
        element: <BlogPreviewCard />,
      },
      {
        path: 'challenges/pricing-toggle',
        element: <PricingToggle />,
      },
      {
        path: 'challenges/todo-app',
        element: <TodoApp />,
      },
      {
        path: 'challenges/interactive-rating',
        element: <InteractiveRating />,
      },
      {
        path: 'challenges/mortgage-repayment-calculator',
        element: <MortgageRepayment />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  },
]);
