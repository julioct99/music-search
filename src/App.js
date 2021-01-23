import React, { useState } from 'react';
import './App.scss';

import { fetchArtists, fetchReleases } from './api/musicbrainz';

import ArtistList from './components/ArtistList/ArtistList';
import ReleaseList from './components/ReleaseList/ReleaseList';
import GeneralSearch from './components/GeneralSearch/GeneralSearch';
import CompositeSearch from './components/CompositeSearch/CompositeSearch';
import Spinner from './components/Spinner/Spinner';

function App() {
  const [artists, setArtists] = useState([]);
  const [releases, setReleases] = useState([]);
  const [artistsLoading, setArtistsLoading] = useState(false);
  const [releasesLoading, setReleasesLoading] = useState(false);

  function getArtists(artistName) {
    fetchArtists(artistName).then((data) => {
      setArtists(data);
      setArtistsLoading(false);
    });
  }

  function getReleases(releaseName) {
    fetchReleases(releaseName).then((data) => {
      setReleases(data);
      setReleasesLoading(false);
    });
  }

  function generalSearch(event, searchTerm) {
    setArtistsLoading(true);
    setReleasesLoading(true);
    event.preventDefault();
    getReleases(searchTerm);
    getArtists(searchTerm);
  }

  function compositeSearch(event, artist, release) {
    event.preventDefault();
    let compositeSearchTerm = `${release} by ${artist}`.trim();
    if (compositeSearchTerm.endsWith('by')) compositeSearchTerm = release;
    if (compositeSearchTerm !== 'by') {
      setArtistsLoading(true);
      setReleasesLoading(true);
      getReleases(compositeSearchTerm);
      getArtists(compositeSearchTerm);
    }
  }

  return (
    <div className='App'>
      <h1>Testing MusicBrainz API</h1>
      <GeneralSearch onSearch={generalSearch} />
      <CompositeSearch onSearch={compositeSearch} />
      {artistsLoading ? <Spinner type='rollerdots' /> : null}
      <ArtistList artists={artists} />
      <hr />
      {releasesLoading ? <Spinner type='rollerdots' /> : null}
      <ReleaseList releases={releases} />
    </div>
  );
}

export default App;
