import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@mdi/react';
import {
  mdiPlayCircleOutline, mdiPauseCircleOutline,
  mdiSkipNextCircleOutline, mdiSkipPreviousCircleOutline,
} from '@mdi/js';

const AudioControls = ({
  color,
  navigation,
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => {
  const { previous, next } = navigation;

  return (
    <div className="audio-control">
      <Icon
        className={`me-3 audio-control__icon audio-control__icon--${color} audio-control__icon--${previous && 'disable'}`}
        path={mdiSkipPreviousCircleOutline}
        size={2}
        aria-label="Previous"
        onClick={onPrevClick}
      />
      {isPlaying ? (
        <Icon
          className={`me-3 audio-control__icon audio-control__icon--${color}`}
          path={mdiPauseCircleOutline}
          size={2}
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        />

      ) : (
        <Icon
          className={`me-3 audio-control__icon audio-control__icon--${color}`}
          path={mdiPlayCircleOutline}
          size={2}
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        />
      )}
      <Icon
        className={`me-3 audio-control__icon audio-control__icon--${color} audio-control__icon--${next && 'disable'}`}
        path={mdiSkipNextCircleOutline}
        size={2}
        aria-label="Next"
        onClick={onNextClick}
      />
    </div>
  );
};

AudioControls.propTypes = {
  color: PropTypes.string,
  navigation: PropTypes.shape({
    previous: PropTypes.bool,
    next: PropTypes.bool,
  }),
  isPlaying: PropTypes.bool,
  onPlayPauseClick: PropTypes.func,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
};

AudioControls.defaultProps = {
  color: '',
  navigation: {},
  isPlaying: false,
  onPlayPauseClick: () => {},
  onPrevClick: () => {},
  onNextClick: () => {},
};

export default AudioControls;
