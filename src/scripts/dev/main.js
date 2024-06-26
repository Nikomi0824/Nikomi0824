console.log('eventPP');
(function () {
    "use strict";
    document.addEventListener('DOMContentLoaded', function() {
        const root = document.documentElement;
        const eventPP = document.querySelector("#eventPP");
        const eventOpenBtn = document.querySelector("#js-eventOpenBtn");
        const closeEventPP = function (event) {
            function close() {
                document.removeEventListener("keyup", closeEventPP);
                eventPP.removeEventListener("click", closeEventPP);
                root.classList.remove("show-event-popup");
                eventPP.style.display = 'none'; 
            }
            switch (event.type) {
                case "keyup":
                    if (event.key === "Escape" || event.keyCode === 27) close();
                    break;
                case "click":
                    if (
                        event.target === this ||
                        event.target.classList.contains("js-ppCloseBtn")
                    )
                        close();
                    break;
            }
        };

        if (eventPP) {
            eventPP.addEventListener('click', closeEventPP); 
        }
        if (eventOpenBtn) {
            eventOpenBtn.addEventListener('click', function() {
                eventPP.style.display = 'flex'; // Показать popup
                document.addEventListener("keyup", closeEventPP);
                eventPP.addEventListener("click", closeEventPP);
            });
        }
    });
    const contactsMap = document.querySelector("#js-contactsMap");
    if (contactsMap) {
        const mapStyles = [
            {"elementType": "geometry", "stylers": [{"color": "#f5f5f5"}]},
            {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]},
            {"elementType": "labels.text.fill", "stylers": [{"color": "#616161"}]},
            {"elementType": "labels.text.stroke", "stylers": [{"color": "#f5f5f5"}]},
            {"featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{"color": "#bdbdbd"}]},
            {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#eeeeee"}]},
            {"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"}]},
            {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#e5e5e5"}]},
            {"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"}]},
            {"featureType": "road", "elementType": "geometry", "stylers": [{"color": "#ffffff"}]},
            {"featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"}]},
            {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#dadada"}]},
            {"featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"}]},
            {"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"}]},
            {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"color": "#e5e5e5"}]},
            {"featureType": "transit.station", "elementType": "geometry", "stylers": [{"color": "#eeeeee"}]},
            {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#c9c9c9"}]},
            {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"}]}
        ];

        const mapCenter = new google.maps.LatLng(56.49387, 84.96274);
        const mapOptions = {
            center: mapCenter,
            disableDefaultUI: true,
            draggable: true,
            gestureHandling: "cooperative",
            scrollwheel: false,
            styles: mapStyles,
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            }
        };
        const map = new google.maps.Map(contactsMap, mapOptions);
        const point = new google.maps.LatLng(56.49385, 84.96274);
        const mapPin = new google.maps.MarkerImage(
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABHCAMAAABf/MtLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAADAUExURUdwTK8wILwyJL0zI70yJbwyI79AIL0yJL8wILs0JLw0JLsyJL0zJbwyJbwzJB8eHv///3Nycjs6OldWVsRMP4+OjsRNP8fHx+Pj492ZkUlISOazrauqqu7MyMfGxsBAMS0sLMlZTc1mW/vy8sBAMvvy8WVkZMVMQPbl48lZTtmMg81mWtmMhMxmW4+Pj/fm4/fl5OGmnvHx8Z2cnMVNQPLZ1tWAdt6ZktBzaHNzc9V/duq/u+Gmn8hZTNFzabm5uYZR+N4AAAAOdFJOUwAQz9/f3xB/EIDPz9/ftWbT5QAAAWxJREFUWMPt1VlTwjAQAGDEaluPJiQhYGjtAeUQxPu+/v+/cpO2DC+OI7PRYcw+JOlO55vMdpO2WmtBNo3W9+FsZzvb2c529l/Y45hXi/iG6yA8fuKMkGUMqS5X1RvLONvA7tJOtaD9au5AginSo5A6hUem3+hRhmUTwhubjNFttbKzDwT7GqqtGpv0G5vE2Ptes9FrsvqW/9FmXDGIjHCuZwYJc0wUHCn9aYlJKO7uKmf/sh39LJxtxx7lObJ9e1emMA1oISN5OUmFmNMrIQSGnd/TM2M/w3iRwCDpCdK+i9EwMfY5jMkU056l0SvNtf0GT0PUfT9K+a6tAYUKP0wFpl3oSpTansuXchIh2jM9LKDWet/SlATNLkxjg2lqsjAtg9cnOqCbU1Ev9Ji6+wTTdv/LLbJdbHnsh160GwZW6ANz+Ns28LC+WXwL9lFt71mwv7gSUcKzuG/fYr2DtqEPd2w0YeAfR55vg/4EpN3f8dlAXnoAAAAASUVORK5CYII=",
            new google.maps.Size(91, 71),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 71)
        );
        new google.maps.Marker({
            position: point,
            map: map,
            icon: mapPin,
            title: "TAGREE digital"
        });
    }
    const jsSelectric = $(".js-selectric");
if (jsSelectric.length) {
  jsSelectric.selectric ({
    nativeOnMobile: false
  });
}

const mobileMask = $(".js-mobileMask");
if (mobileMask.length) {
  mobileMask.mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});
}

const dateField = $(".js-dateField");
if (dateField.length) {
  const pickerInit = function (pick) {
    const dateInput = pick.find(".js-dateInput");
    const dateDay = pick.find(".js-dateDay");
    const dateMonth = pick.find(".js-dateMonth");
    const dateYear = pick.find(".js-dateYear");
    const dateConfig = {
      autoClose: true,
      minDate: new Date(),
      navTitles: {
        days: "MMMM <i>yyyy</i>"
      },
      onSelect: function ({ date }) {
        dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
        dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
        dateYear.val(date ? date.getFullYear() : "");
      }
    };
    new AirDatepicker(dateInput[0], dateConfig);
  };
  $.each(dateField, function (i) {
    pickerInit($(this));
  });
}
})();
