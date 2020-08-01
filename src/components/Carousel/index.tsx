import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider from './components/Slider';
import { SliderItem } from './components/Slider/styles';

interface VideoCardProps {
  ignoreFirstVideo?: boolean;
  category: {
    titulo: string;
    link?: string;
    cor: string;
    linkExtra?: {
      text: string;
      url: string;
    };
    videos: {
      titulo: string;
      url: string;
    }[];
  };
}

const VideoCardGroup: React.FC<VideoCardProps> = ({
  ignoreFirstVideo,
  category,
}) => {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.linkExtra;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
};

export default VideoCardGroup;
