(function() {
  var messageComponent = {

  templateUrl: "templates/message.html",
  controller: function(service, $location) {
    var $ctrl = this;
    $ctrl.display = service.getClicked();
    $ctrl.typeOfService = service.getType();
    console.log($ctrl.typeOfService);
  }
};
    //Getting the type of service selected/time/day.

    // TODO this location path needs to be on the ok button
    //$location.path("/select");

  angular
  .module("GoodNeighborApp")
  .component("messageComponent", messageComponent);
}());
