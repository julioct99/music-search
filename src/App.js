import React, { useState } from 'react';
import './App.css';

function App() {
  const [artists, setArtists] = useState([]);
  const [releases, setReleases] = useState([]);
  // const [covers, setCovers] = useState({});

  function getArtist(artistName) {
    fetch(
      `https://musicbrainz.org/ws/2/artist/?query=artist:${artistName}&fmt=json`
    )
      .then((res) => res.json())
      .then((data) => setArtists(data.artists));
  }

  // function loadCovers() {
  //   const covers2 = {};

  //   const releasesCpy = [...releases];
  //   releasesCpy.forEach((release) => {
  //     fetch(
  //       `https://coverartarchive.org/release/${release.releases[0].id}/front`
  //     ).then((data) => {
  //       if (!data.url.includes('front')) {
  //         if (!covers2[release.id]) {
  //           covers2[release.id] = [];
  //         }
  //         covers2[release.id].push(data.url);
  //       }
  //     });
  //   });

  //   setCovers(covers2);
  //   console.log(covers2);
  // }

  function getRelease(releaseName) {
    console.log(releaseName);
    fetch(
      `https://musicbrainz.org/ws/2/release-group/?query=release:${releaseName}&fmt=json`
    )
      .then((res) => res.json())
      .then((data) => setReleases(data['release-groups']));
  }

  return (
    <div className='App'>
      <h1>Testing MusicBrainz API</h1>
      <button type='button' onClick={() => getArtist('portishead')}>
        Get artist
      </button>
      <button
        type='button'
        onClick={() => {
          setArtists([]);
        }}
      >
        Clean
      </button>
      <p>{JSON.stringify(artists, null, 2)}</p>

      <hr />

      <button
        type='button'
        onClick={() => {
          getRelease('igor');
        }}
      >
        Get releases
      </button>
      {releases
        ? releases.map((release) => {
            return (
              <div key={release.id} style={{ backgroundColor: 'lightblue' }}>
                <h3>{`${release.title} - ${release['artist-credit'][0].name}`}</h3>
                {/* <p>{JSON.stringify(release)}</p> */}
                <img
                  width='300px'
                  src={`https://coverartarchive.org/release/${release.releases[0].id}/front`}
                  alt='Cover'
                />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
