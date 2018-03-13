(function() {
  function apiService($http){
    return {
      getForecastForLocation: getForecastForLocation,
      getlatLngForLocation: getlatLngForLocation,
      getForecastForlatLng: getForecastForlatLng
    };

    // Returns a promise of the forecast data for the given address/location
    function getForecastForLocation(location) {
      return getlatLngForLocation(location).then(function(latLng) {
        return getForecastForlatLng(latLng.lat, latLng.lng);
      });
    }

    function getlatLngForLocation(location) {
      return $http({
        url: "https://www.mapquestapi.com/geocoding/v1/address?key=ZakKdLzZvhVuf6X38wYaD7IoUwS0JHWy",
        params: {
          location: location
        },
        method: "GET"
      }).then(function(response){
        return response.data.results[0].locations[0].latLng;
      });
    }

    //Days are being pulled from the API.
    // Gets the latitude and longitude for the city typed in.
    function getForecastForlatLng(lat, lng) {
      return $http({
        url: "https://forecast.weather.gov/MapClick.php?FcstType=json",
        params: {
          lat: lat,
          lon: lng
        },
        method: "GET"
      }).then(function(response){
        return response.data;
      });
    }
  }

  angular
  .module("GoodNeighborApp")
  .factory("apiService", apiService);
}());
