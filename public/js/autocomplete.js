function initAutoComplete() {
    const searchInput = document.querySelector('input[name="location"]');
    document.addEventListener('DOMContentLoaded', function() {
        const autocomplete = new google.maps.places.Autocomplete(searchInput, {
            types: ['geocode'],
        });
        autocomplete.addListener('place_changed', function () {
            const nearPlace = autocomplete.getPlace();
        });
    });
};