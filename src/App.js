import React, { useState } from 'react';
import './App.scss';

import { fetchArtists, fetchReleases } from './api/musicbrainz';

import ArtistList from './components/ArtistList/ArtistList';
import ReleaseList from './components/ReleaseList/ReleaseList';
import GeneralSearch from './components/GeneralSearch/GeneralSearch';
import CompositeSearch from './components/CompositeSearch/CompositeSearch';
import Spinner from './components/Spinner/Spinner';

const App = () => {
  const [artists, setArtists] = useState([]);
  const [releases, setReleases] = useState([]);
  const [artistsLoading, setArtistsLoading] = useState(false);
  const [releasesLoading, setReleasesLoading] = useState(false);

  const reset = () => {
    setArtists([]);
    setReleases([]);
    setArtistsLoading(true);
    setReleasesLoading(true);
  };

  const getArtists = (artistName) => {
    fetchArtists(artistName).then((data) => {
      setArtists(data);
      setArtistsLoading(false);
    });
  };

  const getReleases = (releaseName) => {
    fetchReleases(releaseName).then((data) => {
      setReleases(data);
      setReleasesLoading(false);
    });
  };

  const generalSearch = (event, searchTerm) => {
    reset();
    event.preventDefault();
    getReleases(searchTerm);
    getArtists(searchTerm);
  };

  const compositeSearch = (event, artist, release) => {
    event.preventDefault();
    let compositeSearchTerm = `${release} by ${artist}`.trim();
    if (compositeSearchTerm.endsWith('by')) compositeSearchTerm = release;
    if (compositeSearchTerm !== 'by') {
      reset();
      getReleases(compositeSearchTerm);
      getArtists(compositeSearchTerm);
    }
  };

  return (
    <div className='App'>
      <h1>Testing MusicBrainz API</h1>
      <GeneralSearch onSearch={generalSearch} />
      <CompositeSearch onSearch={compositeSearch} />
      <ArtistList artists={artists} />
      {artistsLoading ? <Spinner type='rollerdots' /> : null}
      <hr />
      <ReleaseList releases={releases} />
      {releasesLoading ? <Spinner type='rollerdots' /> : null}
    </div>
  );
};

export default App;
