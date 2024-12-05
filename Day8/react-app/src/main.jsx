import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from "./marks.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <Marks name={'Ayush'} roll={2200321540051} m1={56} m2={68} m3={58} />
  </StrictMode>,
);
