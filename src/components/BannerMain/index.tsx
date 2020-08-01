import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import {
  BannerMainContainer,
  ContentAreaContainer,
  ContentAreaContainerItem,
  ContentAreaContainerTitle,
  ContentAreaContainerDescription,
  WatchButton,
} from './styles';

interface VideoProps {
  replace(url: RegExp, page: string): string;
}

interface BannerProps {
  videoTitle: string;
  videoDescription: string;
  url: string;
}

const getYouTubeId = (youtubeURL: VideoProps) => {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7',
  );
};

const BannerMain: React.FC<BannerProps> = ({
  videoTitle,
  videoDescription,
  url,
}) => {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainerItem>
          <ContentAreaContainerTitle>{videoTitle}</ContentAreaContainerTitle>

          <ContentAreaContainerDescription>
            {videoDescription}
          </ContentAreaContainerDescription>
        </ContentAreaContainerItem>

        <ContentAreaContainerItem>
          <VideoIframeResponsive youtubeID={youTubeID} />
          <WatchButton>Assistir</WatchButton>
        </ContentAreaContainerItem>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
};

export default BannerMain;
