function initAutocomplete() {
    const autcomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')), 
    {
        types: ['geocode']
    });

    autcomplete.addListener('place_changed', searchNearbyPlaces)
};

function searchNearbyPlaces() {
    document.getElementById('places').innerHTML = '';

    const place = autocomplete.getPlace();
    console.log(place);
};

initAutocomplete();