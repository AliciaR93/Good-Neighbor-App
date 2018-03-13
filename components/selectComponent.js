(function() {
  var selectComponent = {
    templateUrl: "templates/select.html",

    controller: function($location, service){
      var $ctrl = this;
      $ctrl.choice = {lawn: "Lawn Care", snow: "Snow Care"};
      $ctrl.type = service.getType();
      $ctrl.sendType = function(selected) {
      service.sendType(selected)
        $location.path("/schedule");
      }
    }
  }
  //When lawn OR snow is clicked, takes person to schedule page.
  // Then message page will show with the service selected/time and day selected
  angular
    .module("GoodNeighborApp")
    .component("selectComponent", selectComponent);
}());
