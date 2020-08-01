import React from 'react';
import { VideoCardContainer } from './styles';

interface VideoProps {
  replace(url: RegExp, page: string): string;
}

interface CardVideoProps {
  videoTitle: string;
  videoURL: string;
  categoryColor: string;
}

const getYouTubeId = (youtubeURL: VideoProps) => {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7',
  );
};

const VideoCard: React.FC<CardVideoProps> = ({
  videoTitle,
  videoURL,
  categoryColor,
}) => {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL,
  )}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
  );
};

export default VideoCard;
