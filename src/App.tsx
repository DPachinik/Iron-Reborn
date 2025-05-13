import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Pages/Landing';

function App() {
  return (
    <div className="h-full">
      <Navbar />

      <Routes>
        <Route path="/Landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
