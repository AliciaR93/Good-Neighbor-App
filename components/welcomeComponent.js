(function() {
  var welcomeComponent = {
    templateUrl: "templates/welcome.html",

    controller: function($location,service) {
      var $ctrl = this;

      $ctrl.locationInfo = function(information){
        var info = {};
        //the object will store name, address, city, state, zip, lot/driveway size
        info.name = information.name;
        info.address = information.address;
        info.city = information.city;
        info.state = information.state;
        info.zip = information.zip;
        info.lot = information.lot;
        info.drive = information.drive;

        //function that passes info.city to go through service and log the latitude
        //and longitude of city entered
        // $ctrl.getLatLon = function(info.city){
        //   var latLon = {};
        //   info.city = latitude.city;
        //   info.city = longitude.city;
        // }
        // // Added lines 19-25 may not work

        service.setInfo(info);
        console.log(info);
        $location.path("/select");
      }
      // name, city, state, zip stored in an object
      //when submitted, go to select, and choose which service
    }
  }


  angular
    .module("GoodNeighborApp")
    .component("welcomeComponent", welcomeComponent);
}());
