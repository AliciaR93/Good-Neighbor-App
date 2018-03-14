(function() {
  var welcomeComponent = {
    templateUrl: "templates/welcome.html",

    controller: function($location,service) {
      var $ctrl = this;
      $ctrl.locationInfo = function(information){
        var info = {};
        //the object will store name, address, city, state, zip, lot/driveway size
        //when submitted, goes to select
        info.name = information.name;
        info.address = information.address;
        info.city = information.city;
        info.state = information.state;
        info.zip = information.zip;
        info.lot = information.lot;
        info.drive = information.drive;
        // setInfo() is in the service, takes the objects properties
        service.setInfo(info);
        console.log(info);
        $location.path("/select");
      }
    }
  }
  angular
    .module("GoodNeighborApp")
    .component("welcomeComponent", welcomeComponent);
}());
