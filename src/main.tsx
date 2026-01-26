import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <ToastContainer autoClose={1500} />
      <App />
    </StrictMode>
  </BrowserRouter>
);
