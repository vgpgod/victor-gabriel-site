import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import ConsorcioImobiliario from '../pages/ConsorcioImobiliario';
import ConsorcioVeiculos from '../pages/ConsorcioVeiculos';
import ComoFunciona from '../pages/ComoFunciona';
import PerguntasFrequentes from '../pages/PerguntasFrequentes';
import Contato from '../pages/Contato';
import PoliticaPrivacidade from '../pages/PoliticaPrivacidade';
import NaoEncontrada from '../pages/NaoEncontrada';

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/sobre" element={<MainLayout><Sobre /></MainLayout>} />
        <Route path="/consorcio-imobiliario" element={<MainLayout><ConsorcioImobiliario /></MainLayout>} />
        <Route path="/consorcio-veiculos" element={<MainLayout><ConsorcioVeiculos /></MainLayout>} />
        <Route path="/como-funciona" element={<MainLayout><ComoFunciona /></MainLayout>} />
        <Route path="/perguntas-frequentes" element={<MainLayout><PerguntasFrequentes /></MainLayout>} />
        <Route path="/contato" element={<MainLayout><Contato /></MainLayout>} />
        <Route path="/politica-de-privacidade" element={<MainLayout><PoliticaPrivacidade /></MainLayout>} />
        <Route path="*" element={<MainLayout><NaoEncontrada /></MainLayout>} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
