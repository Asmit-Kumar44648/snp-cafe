import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/layout/SmoothScroll';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import GalleryPage from './pages/GalleryPage';
import FranchisePage from './pages/FranchisePage';
import JoinUsPage from './pages/JoinUsPage';
import OrderSelectorModal from './components/ui/OrderSelectorModal';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="franchise" element={<FranchisePage />} />
            <Route path="join-us" element={<JoinUsPage />} />
          </Route>
        </Routes>
        <OrderSelectorModal />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#1A0A0B',
              color: '#EFEACD',
              border: '1px solid rgba(248, 215, 148, 0.2)',
              fontFamily: 'inherit',
              fontSize: '14px',
            },
            success: {
              iconTheme: { primary: '#25D366', secondary: '#EFEACD' },
            },
            error: {
              iconTheme: { primary: '#9C0512', secondary: '#EFEACD' },
            },
          }}
        />
      </SmoothScroll>
    </BrowserRouter>
  );
}
