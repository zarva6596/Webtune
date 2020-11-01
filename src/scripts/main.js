/* eslint-disable no-undef */
'use strict';

const script = document.createElement('script');

// eslint-disable-next-line max-len
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCvzEBq0Js5PxaHTbgmmAm2Ejeo1pC9cgY&callback=initMap';
script.defer = true;

window.initMap = function() {
  const position = {
    lat: 50.443205,
    lng: 30.497723,
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: position,
    zoom: 13,
    disableDefaultUI: true,
    styles: [
      {
        'featureType': 'all',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'saturation': 36,
          },
          {
            'color': '#000000',
          },
          {
            'lightness': 40,
          },
        ],
      },
      {
        'featureType': 'all',
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'visibility': 'on',
          },
          {
            'color': '#000000',
          },
          {
            'lightness': 16,
          },
        ],
      },
      {
        'featureType': 'all',
        'elementType': 'labels.icon',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'administrative',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 20,
          },
        ],
      },
      {
        'featureType': 'administrative',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 17,
          },
          {
            'weight': 1.2,
          },
        ],
      },
      {
        'featureType': 'landscape',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 20,
          },
        ],
      },
      {
        'featureType': 'poi',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 21,
          },
        ],
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 17,
          },
        ],
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 29,
          },
          {
            'weight': 0.2,
          },
        ],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 18,
          },
        ],
      },
      {
        'featureType': 'road.local',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 16,
          },
        ],
      },
      {
        'featureType': 'transit',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 19,
          },
        ],
      },
      {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 17,
          },
        ],
      },
    ],
  });

  // eslint-disable-next-line no-unused-vars
  const marker = new google.maps.Marker({
    position,
    map,
    icon: 'marker.svg',
  });
};

document.head.appendChild(script);
