import { BaseLayout } from './components/BaseLayout';
import { Dashboard } from './pages/Dashboard';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BaseLayout>
        <Dashboard />
      </BaseLayout>
    </>
  );
}

export default App;
