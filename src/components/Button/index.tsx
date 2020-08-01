import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  href: string;
  className: string;
}

const Button: React.FC<Props> = ({ className, href, children }) => {
  return (
    <nav>
      <Link className={className} to={href}>
        {children}
      </Link>
    </nav>
  );
};

export default Button;
