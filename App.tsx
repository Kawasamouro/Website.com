import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Servers from './pages/Servers';
import { ThemeProvider } from './context/ThemeContext';
import { MouseLightProvider } from './context/MouseLightContext';
import { DiscordProvider } from './context/DiscordContext';
import { NotesProvider } from './context/NotesContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'notes', element: <Notes /> },
      { path: 'servers', element: <Servers /> }
    ]
  }
]);

function App() {
  useEffect(() => {
    document.title = 'KARADEV.js | Portfolio';
  }, []);

  return (
    <ThemeProvider>
      <MouseLightProvider>
        <DiscordProvider>
          <NotesProvider>
            <RouterProvider router={router} />
          </NotesProvider>
        </DiscordProvider>
      </MouseLightProvider>
    </ThemeProvider>
  );
}

export default App;