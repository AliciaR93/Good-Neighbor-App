//Module must be linked in this file
(function() {
  function service($location, $q) {
    //TODO $http will need to be injected in the service
    //Object stores name, address, city, state, zip.
    //TODO FIX THIS! The lot size/driveway size are logging undefined?
    //TODO Object to store day and time selected
    var info = {};
    var whatsClicked = {};
    // api();
    return {
      getInfo: getInfo,
      setInfo: setInfo,
      itemClicked: itemClicked
      // api: api
    }
    function setInfo(information) {
      info = information;
    }

    function itemClicked(clicked) {
      whatsClicked = clicked;
    }
    function getInfo(){
      return info;
    }
    //  API
    // function api(){
    //   $http.get("").then(function(response){
    //     console.log(response);
    //   })
    // }
  }

  angular
    .module("GoodNeighborApp")
    .factory("service", service);
}());
