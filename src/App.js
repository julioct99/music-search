import React, { useState } from 'react';
import './App.css';

function App() {
  const [artists, setArtists] = useState([]);
  const [releases, setReleases] = useState([]);
  const [search, setSearch] = useState('');

  function getArtists(artistName) {
    fetch(
      `https://musicbrainz.org/ws/2/artist/?query=artist:${artistName}&fmt=json`
    )
      .then((res) => res.json())
      .then((data) => setArtists(data.artists));
  }

  function getReleases(releaseName) {
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

      <input onChange={(e) => setSearch(e.target.value)} type='text' />
      <button
        type='button'
        onClick={() => {
          getReleases(search);
          getArtists(search);
        }}
      >
        Search
      </button>

      <h2>Artists</h2>
      {artists.map((artist) => {
        return (
          <div key={artist.id} style={{ backgroundColor: 'lightblue' }}>
            <h3>{`${artist.name} (${artist.type}), ${artist.country}. `}</h3>
            <i>{`${artist.disambiguation ? artist.disambiguation : ''}`}</i>
            <p>{JSON.stringify(artist, null, 4)}</p>
          </div>
        );
      })}

      <hr />
      <h2>Releases</h2>
      {releases
        ? releases.map((release) => {
            return (
              <div key={release.id} style={{ backgroundColor: 'lightblue' }}>
                <h3>{`${release.title} - ${release['artist-credit'][0].name}`}</h3>
                <p>{JSON.stringify(release.releases, null, 4)}</p>
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
