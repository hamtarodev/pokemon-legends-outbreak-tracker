import { AppBar, AppBarTitle } from 'react-md';
import React from 'react';

const Header: React.FC = () => {
  return (
    <AppBar>
      <AppBarTitle className="rmd-typography--capitalize">
        Outbreak Tracker
      </AppBarTitle>
    </AppBar>
  );
};

export default Header;