import React, { useState } from 'react';
import './App.scss';

import ArtistList from './components/ArtistList/ArtistList';
import ReleaseList from './components/ReleaseList/ReleaseList';

function App() {
  const [artists, setArtists] = useState([]);
  const [releases, setReleases] = useState([]);
  const [search, setSearch] = useState('');
  const [artistSearch, setArtistSearch] = useState('');
  const [releaseSearch, setReleaseSearch] = useState('');

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

  function generalSearch() {
    getReleases(search);
    getArtists(search);
  }

  function compositeSearch(event) {
    event.preventDefault();
    const compositeSearchTerm = `${releaseSearch} by ${artistSearch}`.trim();
    if (compositeSearchTerm !== 'by') {
      getReleases(compositeSearchTerm);
      getArtists(compositeSearchTerm);
    }
  }

  return (
    <div className='App'>
      <h1>Testing MusicBrainz API</h1>
      <input
        placeholder='General search'
        onChange={(e) => setSearch(e.target.value)}
        type='search'
      />
      <button type='button' onClick={generalSearch}>
        Search
      </button>
      <br />
      <form onSubmit={(event) => compositeSearch(event)}>
        <input
          onChange={(e) => setReleaseSearch(e.target.value)}
          placeholder='Album, single, EP...'
          type='search'
        />
        <span> by </span>
        <input
          onChange={(e) => setArtistSearch(e.target.value)}
          placeholder='Artist'
          type='search'
        />
        <button type='submit'>Search</button>
      </form>
      <ArtistList artists={artists} />
      <hr />
      <ReleaseList releases={releases} />
    </div>
  );
}

export default App;
