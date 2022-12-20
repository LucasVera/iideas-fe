import {
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Home from './pages/Home/Home';

import Login from './pages/Login/Login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout><Home /></Layout>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
