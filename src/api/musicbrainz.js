export function fetchArtists(artistName) {
  return fetch(
    `https://musicbrainz.org/ws/2/artist/?query=artist:${artistName}&fmt=json`
  )
    .then((res) => res.json())
    .then((data) => data.artists);
}

export function fetchReleases(releaseName) {
  return fetch(
    `https://musicbrainz.org/ws/2/release-group/?query=release:${releaseName}&fmt=json`
  )
    .then((res) => res.json())
    .then((data) => data['release-groups']);
}
