import React, { useState } from 'react';
import './App.css';

import ArtistList from './components/ArtistList/ArtistList';
import ReleaseList from './components/ReleaseList/ReleaseList';

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
      <ArtistList artists={artists} />
      <hr />
      <ReleaseList releases={releases} />
    </div>
  );
}

export default App;
