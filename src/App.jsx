import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import NotFound from './component/Notfound';
import Loading from './component/Loading';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="*" element={<NotFound />} errorElement={<NotFound />} />
    </Routes>
  );
}

export default App;
