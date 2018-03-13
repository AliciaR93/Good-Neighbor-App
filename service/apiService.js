(function() {
  function apiService($http){
    return {
      // getWeather: getWeather,
      getForecast: getForecast
    };
    // function getWeather(){
    //   return $http({
    //     url: "http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id=1d4fc982&app_key=4703b3fbc7b12f06706de5b0437d4f9e",
    //     method: "GET"
    //   }).then(function(response){
    //   return response.data;
    //   });
    // }
    function getForecast() {
      return $http({
        url: "https://forecast.weather.gov/MapClick.php?lat=42.335993&lon=-83.049806&FcstType=json",
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
