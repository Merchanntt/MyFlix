import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import Button from '../Button';
import './styles.css';

const Header: React.FC = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="TecFlix" />
      </Link>
      <Button className="ButtonLink" href="/create/video">
        Adicionar Video
      </Button>
    </nav>
  );
};

export default Header;
