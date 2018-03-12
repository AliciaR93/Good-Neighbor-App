(function() {
  var scheduleComponent = {

  templateUrl: "templates/scheduleTemplate.html",
  controller: function(service, $location){
    var $ctrl = this;
    $ctrl.selectedTime = "";
    $ctrl.selectedDay = "";
    // These arrays are referenced in the schedule.html template.
    $ctrl.times = ["9:00", "10:00","11:00","12:00","1:00","2:00","3:00","4:00"];
    $ctrl.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // TODO LIST
    //array needs to store the one time thats clicked on the
    //one day thats clicked to send to the message to the message.html to
    //show confirmation
    // $location.path("/message");
    $ctrl.clicked = function(selectedDay, selectedTime){
      
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
