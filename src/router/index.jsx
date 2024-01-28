import { useContext } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@/layouts';
import Home from '@/pages/home';
import Customization from '@/pages/customization';
import Resume from '@/pages/resume';
import AppContext from '@/util/context';

const AppRouter = () => {
  const { data } = useContext(AppContext);

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/datos'
            // element={data.user ? <Customization /> : <Navigate replace to='/' />}
            element={<Customization />}
          />
          <Route
            path='/resumen'
            // element={data.user ? <Resume /> : <Navigate replace to='/' />}
            element={<Resume />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;