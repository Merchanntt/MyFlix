import styled from 'styled-components';

export const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 48px;
    height: 100%;
    transform: initial;
    transition: 0.3s;

    &:before {
      font-size: 30px;
    }
    &:hover {
      background-color: rgba(1, 5, 9, 0.8);
    }
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;
