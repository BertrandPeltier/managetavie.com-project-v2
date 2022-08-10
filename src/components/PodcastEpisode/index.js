import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, Form } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiExitToApp } from '@mdi/js';

import AudioControls from './AudioControls';

import './styles.scss';

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
 */
const PodcastEpisode = ({ episodes }) => {
  // Set episode id
  const { episodeId } = useParams();

  // State
  const [trackIndex, setTrackIndex] = useState(episodeId === 'last' ? episodes[0].id : Number(episodeId));
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const navigate = useNavigate();

  // Destructure for conciseness
  const {
    id, title, caption, url, date, detail,
  } = episodes.find((item) => item.id === trackIndex);

  const navigation = {
    next: trackIndex === episodes[0].id,
    previous: trackIndex === episodes[episodes.length - 1].id,
  };

  // Refs
  const audioRef = useRef(new Audio(url));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const toPrevTrack = () => {
    if (!navigation.previous) {
      setTrackIndex(trackIndex - 1);
      navigate(`/podcast/episode/${trackIndex - 1}`);
    }
  };

  const toNextTrack = () => {
    if (!navigation.next) {
      setTrackIndex(trackIndex + 1);
      navigate(`/podcast/episode/${trackIndex + 1}`);
    }
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      }
      else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    }
    else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(url);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      // Auto-play
      // audioRef.current.play();
      // setIsPlaying(true);
      // startTimer();
    }
    else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => () => {
    // Pause and clean up on unmount
    audioRef.current.pause();
    clearInterval(intervalRef.current);
  }, []);

  return (
    <Card className="shadow episode m-auto">
      <Card.Header className="episode__header">
        <Card.Title className={`episode__title episode__title--${id % 2 === 0 ? 'yellow' : 'blue'} fw-bold`}>
          Épisode n°{id} du {date} <br />
          <span>{title}</span>
        </Card.Title>
        <Card.Img
          className="episode__image"
          src={caption}
          alt={`podcast "Ça reste entre nous", épidose n°${id} : ${title}`}
        />
      </Card.Header>
      <Card.Body className="episode__body">
        <Card.Text as="div" className="detail mb-2">
          {
            detail.map((item) => (
              <p
                key={item}
              >
                { item }
              </p>
            ))
          }
        </Card.Text>
        <AudioControls
          color={id % 2 === 0 ? 'yellow' : 'blue'}
          navigation={navigation}
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <Card.Text className={`timestamp timestamp--${id % 2 === 0 ? 'yellow' : 'blue'}`} as="div">
          <p className="m-0">{new Date(audioRef.current.currentTime * 1000).toISOString().slice(14, 19)}</p>
          <p className="m-0">{Number.isNaN(duration) ? '--:--' : (new Date(duration * 1000).toISOString().slice(14, 19))}</p>
        </Card.Text>
        <Form.Range
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration || `${duration}`}
          className={`control-time control-time--${id % 2 === 0 ? 'yellow' : 'blue'}`}
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
        />
      </Card.Body>
      <Card.Footer className="episode__footer">
        <Card.Link
          className="back-link"
          onClick={() => {
            navigate('/podcast');
          }}
        >
          <Icon
            path={mdiExitToApp}
            horizontal
            size={1}
            className="me-1"
          />
          Retour aux épisodes
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

PodcastEpisode.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
};

PodcastEpisode.defaultProps = {
  episodes: [],
};

export default PodcastEpisode;
