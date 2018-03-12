(function() {
  var welcomeComponent = {
    templateUrl: "templates/welcome.html",

    controller: function($location,service) {
      var $ctrl = this;

      $ctrl.Infoservice = function(information){
        var info = {};
        //the object will store name, address, city, state, zip, lot/driveway size
        info.name = information.name;
        info.address = information.address;
        info.city = information.city;
        info.state = information.state;
        info.zip = information.zip;
        info.lot = information.lot;
        info.drive = information.drive;

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
