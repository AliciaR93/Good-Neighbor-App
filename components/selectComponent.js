(function() {
  var selectComponent = {
    templateUrl: "templates/select.html",
    //When a button is selected, it'll change views.
    // Pick one time in one of the days, then message page will show with the
    // confirmation page(message.html) It will confirm day and time chosen, and
    // thank the person who entered their information.
    controller: function($location, service){
      var $ctrl = this;
      $ctrl.service = function() {
        // var theService = {};
        // theService.snow = selected.snow;
        // theService.lawn = selected.lawn;
        //
        // service.setInfo(theService);
        $location.path("/schedule");

      }
    }
  }


  angular
    .module("GoodNeighborApp")
    .component("selectComponent", selectComponent);
}());
