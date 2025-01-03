'use client';

import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';
// import { useEffect } from 'react';

function Home() {
  const [joke, setJoke] = useState('');
  const [jokeText, setJokeText] = useState('');
  const [jokeButtonText, setJokeButtonText] = useState('Get a Joke');

  console.warn(joke);

  const handleClick = () => {
    if (jokeButtonText === 'Get a Joke' || jokeButtonText === 'Get another Joke') {
      getJoke().then((data) => {
        setJoke(data);
        setJokeText(data.setup);
        setJokeButtonText('Get Punchline');
      });
    } else if (jokeButtonText === 'Get Punchline') {
      setJokeText(
        <>
          {joke.setup} <br />
          <br /> {joke.delivery}
        </>,
      );
      setJokeButtonText('Get another Joke');
    }
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <div>{jokeText}</div>
      <Button style={{ marginTop: '15px' }} onClick={handleClick}>
        {jokeButtonText}
      </Button>
    </div>
  );
}

export default Home;
