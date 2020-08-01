import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-web';

import NotFound from '../../assets/NotFound.json';
import { Animation, Container } from './style';
import './ButtonStyle.css';
import Button from '../../components/Button';

const NotFoundPage: React.FC = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      Lottie.loadAnimation({
        container: element.current,
        renderer: 'svg',
        autoplay: true,
        animationData: NotFound,
      });
    }
  }, []);

  return (
    <Container>
      <Animation ref={element} />
      <Button className="ButtonLinkError" href="/">
        Save me!
      </Button>
    </Container>
  );
};

export default NotFoundPage;
