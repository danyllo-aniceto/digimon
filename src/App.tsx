import { ThemeProvider } from 'styled-components';
import { Dashboard } from './pages/Dashboard';
import { GlobalStyle, theme } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
