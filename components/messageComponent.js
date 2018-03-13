(function() {
  var messageComponent = {

  templateUrl: "templates/message.html",
  controller: function(service, $location) {
    var $ctrl = this;
    $ctrl.display = service.getClicked();
    $ctrl.typeOfService = service.getType();
    console.log($ctrl.typeOfService);
    // $ctrl.clicked = function(display){
    //   // service.getClicked(selectedDay, selectedTime);
    // }
  }
};
// this location path needs to be on the ok button
// $location.path("/select");

  angular
  .module("GoodNeighborApp")
  .component("messageComponent", messageComponent);
}());
