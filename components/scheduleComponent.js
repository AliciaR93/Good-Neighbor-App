(function() {
  var scheduleComponent = {

  templateUrl: "templates/scheduleTemplate.html",
  controller: function(apiService, $location, service){
    var $ctrl = this;
    // These arrays are referenced in the schedule.html template.
    $ctrl.times = ["9:00", "10:00","11:00","12:00","1:00","2:00","3:00","4:00"];
    $ctrl.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    $ctrl.selectedTime = "";
    $ctrl.selectedDay = "";

    $ctrl.itemClicked = function(selectedTime, selectedDay) {
      var whatsClicked = {};
      whatsClicked.day = selectedDay;
      whatsClicked.time = selectedTime;
      $ctrl.selectedTime = selectedTime;
      $ctrl.selectedDay = selectedDay;
      service.saveClicked(whatsClicked);
    }

    $ctrl.infoToShow = function(){
      $location.path("/message");
      // console.log(this);
    }
    // apiService.getWeather().then(function(data){
    // $ctrl.data = data;
    // console.log($ctrl.data);
    // });
    apiService.getForecast().then(function(data){
      $ctrl.forecastData = data;
      console.log($ctrl.forecastData);
      $ctrl.days = data.time.startPeriodName;

      // $ctrl.days = $ctrl.days.filter(function(day) {
      //   // return true if you want to keep this day. Return false if you want to remove it.
      //   console.log(day);
      //   if(){
      //  console.log();
      //   } else {
      //  console.log();
      //   }
      //   // return
      // });
    });
  }

};
  angular
  .module("GoodNeighborApp")
  .component("scheduleComponent", scheduleComponent);
}());
