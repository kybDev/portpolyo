import React from 'react';

import Particles from '../component/LeftCont/Particles';
import Logo from '../component/LeftCont/Logo';
import Profile from '../component/LeftCont/Profile';
import Introduction from '../component/LeftCont/Introduction';
import SocialMedia from '../component/LeftCont/SocialMedia';
import Navigation from '../component/LeftCont/Navigation';





const LeftNav = () => {
  return (
    <div className="kyb-cont-left">
        <Particles />
        <Logo />

        <Navigation />
        <Profile />
        <Introduction />
        <SocialMedia />
      </div>
  );
}

export default LeftNav;
