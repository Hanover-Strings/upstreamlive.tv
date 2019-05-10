const Player = () => (
    Amplitude.init({

        "songs": [
          {
            "name": "UpstreamLive Audio",
            "url": "http://audio.upstreamlive.tv:8000/stream",
            "station_art_url": "https://strings-store.nyc3.digitaloceanspaces.com/upstream-faux.jpg",
            "genre": "folk",
            "live": true
          }
        ]
      })
);

export default Player;
