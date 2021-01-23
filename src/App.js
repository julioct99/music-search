import React, { useState } from 'react';
import './App.scss';

import { fetchArtists, fetchReleases } from './api/musicbrainz';

import ArtistList from './components/ArtistList/ArtistList';
import ReleaseList from './components/ReleaseList/ReleaseList';
import GeneralSearch from './components/GeneralSearch/GeneralSearch';
import CompositeSearch from './components/CompositeSearch/CompositeSearch';

function App() {
  const [artists, setArtists] = useState([]);
  const [releases, setReleases] = useState([]);

  function getArtists(artistName) {
    fetchArtists(artistName).then((data) => setArtists(data));
  }

  function getReleases(releaseName) {
    fetchReleases(releaseName).then((data) => setReleases(data));
  }

  function generalSearch(event, searchTerm) {
    event.preventDefault();
    getReleases(searchTerm);
    getArtists(searchTerm);
  }

  function compositeSearch(event, artist, release) {
    event.preventDefault();
    let compositeSearchTerm = `${release} by ${artist}`.trim();
    if (compositeSearchTerm.endsWith('by')) compositeSearchTerm = release;
    if (compositeSearchTerm !== 'by') {
      getReleases(compositeSearchTerm);
      getArtists(compositeSearchTerm);
    }
  }

  return (
    <div className='App'>
      <h1>Testing MusicBrainz API</h1>
      <GeneralSearch onSearch={generalSearch} />
      <br />
      <CompositeSearch onSearch={compositeSearch} />
      <ArtistList artists={artists} />
      <hr />
      <ReleaseList releases={releases} />
    </div>
  );
}

export default App;
