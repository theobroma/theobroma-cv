import React from 'react';
import { Outlet } from 'react-router-dom';
import PersistentDrawer from '../@components/AppBar/PersistentDrawer';
import Footer from '../@components/Footer';

const AppLayout = () => {
  return (
    <div className="HolyGrail">
      <PersistentDrawer>
        <Outlet />
      </PersistentDrawer>
      <Footer />
    </div>
  );
};

export { AppLayout };
