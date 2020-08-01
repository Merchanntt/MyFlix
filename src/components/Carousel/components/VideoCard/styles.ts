import styled from 'styled-components';

interface VideoCardContainerProps {
  url: string;
}

export const VideoCardContainer = styled.a<VideoCardContainerProps>`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: 0.3s;
  &:hover,
  &:focus {
    opacity: 0.7;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    width: 400px;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
