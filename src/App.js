import './theme/style.css'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import AboutMePage from './pages/AboutMePage'
import NotFoundPage from './pages/NotFoundPage'
import SinglePostPage from './pages/SinglePostPage'
import { useRoutes } from 'hookrouter';

export default function App() {
  const routes = {
    '/': () => <HomePage />,
    '/blog': () => <BlogPage />,
    '/about-me': () => <AboutMePage />,
    '/post/:id': ({ id }) => <SinglePostPage id={id} />
  };
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />
}
