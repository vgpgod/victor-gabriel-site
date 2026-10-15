import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';
import WhatsAppButton from './components/common/WhatsAppButton';
import './styles/index.css';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <AppRoutes />
        <WhatsAppButton message="Olá, Victor! Gostaria de saber mais sobre suas soluções de consórcio." />
      </div>
    </HelmetProvider>
  );
}

export default App;
