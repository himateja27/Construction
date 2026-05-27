import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="app"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="min-h-screen bg-crown-dark text-white"
      >
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<DefaultLayout />}> 
            {AppRoutes()}
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
