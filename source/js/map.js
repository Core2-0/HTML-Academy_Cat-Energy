const map = L.map('map');

if (document.body.clientWidth < 1300) {
  map.setView({
    lat: 59.938631,
    lng: 30.323055,
  }, 17);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: 'img/location/map_pin.png',
    iconSize: [57, 53],
    iconAnchor: [28, 53],
  });

  const mainPinMarker = L.marker(
    {
      lat: 59.938631,
      lng: 30.323055,
    },
    {
      icon: mainPinIcon,
    }
  );

  mainPinMarker.addTo(map);
} else if (document.body.clientWidth >= 1300) {

  map.setView({
    lat: 59.938963,
    lng: 30.319293,
  }, 17);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: 'img/location/map_pin.png',
    iconSize: [124, 106],
    iconAnchor: [62, 106],
  });

  const mainPinMarker = L.marker(
    {
      lat: 59.938631,
      lng: 30.323055,
    },
    {
      icon: mainPinIcon,
    }
  );

  mainPinMarker.addTo(map);
}
