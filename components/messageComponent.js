(function() {
  var messageComponent = {

    templateUrl: "templates/message.html",
    controller: function(service, $location) {
      var $ctrl = this;
      $ctrl.display = service.getClicked();
      $ctrl.typeOfService = service.getType();
      $ctrl.info = service.getInfo();
      //Getting the type of service selected/time/day.
      console.log($ctrl.typeOfService);
      console.log($ctrl.info);
      console.log($ctrl.info.drive);
      console.log($ctrl.info.lot);

      if ($ctrl.typeOfService === "Lawn Care") {
        // Statements to determine from welcome page lot/drive size
        var lot = $ctrl.info.lot;
        if (lot === "Small") {
          console.log("The lot is small");
          $ctrl.price = "40 dollars";
          $ctrl.type = "Lawn Care";
        } else if (lot === "Medium") {
          console.log("The lot is medium");
          $ctrl.price = "60 dollars";
          $ctrl.type = "Lawn Care";
        } else if (lot === "Large") {
          console.log("The lot is large");
          $ctrl.price = "80 dollars";
          $ctrl.type = "Lawn Care";
        } else {
          console.log("Nothing Selected");
        }
      } else {

        var drive = $ctrl.info.drive
        if (drive === "Small") {
          console.log("The driveway is Small");
          $ctrl.price = "50 dollars";
          $ctrl.type = "Snow Care";
        } else if (drive === "Medium") {
          console.log("The driveway is Medium");
          $ctrl.price = "70 dollars";
          $ctrl.type = "Snow Care";
        } else if (drive === "Large") {
          console.log("The driveway is Large");
          $ctrl.price = "90 dollars";
          $ctrl.type = "Snow Care";
        } else {
          console.log("Nothing Selected");
        }
      }
    }
  };


  // TODO this location path needs to be on the ok button
  //$location.path("/select");

  angular
    .module("GoodNeighborApp")
    .component("messageComponent", messageComponent);
}());
