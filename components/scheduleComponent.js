(function() {
  var scheduleComponent = {

  templateUrl: "templates/scheduleTemplate.html",
  controller: function(service, $location){
    var $ctrl = this;
    // These arrays are referenced in the schedule.html template.
    $ctrl.times = ["9:00", "10:00","11:00","12:00","1:00","2:00","3:00","4:00"];
    $ctrl.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    $ctrl.selectedTime = "";
    $ctrl.selectedDay = "";
    // TODO LIST
    //one day thats clicked to send to the message to the message.html to
    //show confirmation
    // $location.path("/message");
    $ctrl.itemClicked = function(selectedTime, selectedDay) {
      var whatsClicked = {};
      whatsClicked.day = selectedDay.day;
      whatsClicked.time = selectedTime.time;
      $ctrl.selectedTime = "";
      $ctrl.selectedDay = "";
      service.itemClicked(whatsClicked);
      console.log(selectedTime, selectedDay);
    }

    $ctrl.infoToShow = function(){
      $location.path("/message");
      console.log(this);
    }
  }

};
  angular
  .module("GoodNeighborApp")
  .component("scheduleComponent", scheduleComponent);
}());
