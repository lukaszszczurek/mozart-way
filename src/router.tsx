import { createBrowserRouter } from 'react-router-dom';
import { getFeatured } from './lib/site-config';
import Home from './pages/Home';
import HomePage from './pages/HomePage';
import WebDev from './pages/WebDev';
import Education from './pages/Education';
import Mastermode from './pages/Mastermode';
import MozartAdsPage from './pages/mozart-ads/MozartAdsPage';

/**
 * Page registry. Add new service landings here as Dr Strange generates them.
 * The key is the URL slug (without leading slash), the value is the page component.
 */
const pageMap: Record<string, React.ComponentType> = {
  'strony-www': WebDev,
  'education': Education,
  'mastermode': Mastermode,
  'mozart-ads': MozartAdsPage,
  'home-minimal': Home,
  // Dr Strange adds new entries here when mode=add-to-mozartway
};

const featured = getFeatured();
const FeaturedComponent = featured && pageMap[featured] ? pageMap[featured] : null;

export const router = createBrowserRouter([
  {
    path: '/',
    element: FeaturedComponent ? <FeaturedComponent /> : <HomePage />,
  },
  {
    path: '/strony-www',
    element: <WebDev />,
  },
  {
    path: '/education',
    element: <Education />,
  },
  {
    path: '/mastermode',
    element: <Mastermode />,
  },
  {
    path: '/mozart-ads',
    element: <MozartAdsPage />,
  },
  // Dr Strange adds routes for new landings here
]);
