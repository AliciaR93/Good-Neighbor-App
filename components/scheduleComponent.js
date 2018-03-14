(function() {
  var scheduleComponent = {

  templateUrl: "templates/scheduleTemplate.html",
  controller: function(apiService, $location, service){
    var $ctrl = this;
    // The time array is in the schedule.html
    $ctrl.times = ["9:00", "10:00","11:00","12:00","1:00","2:00","3:00","4:00"];
    $ctrl.selectedTime = "";

    $ctrl.itemClicked = function(selectedTime, selectedDay) {
      var whatsClicked = {};
      whatsClicked.day = selectedDay;
      whatsClicked.time = selectedTime;
      $ctrl.selectedTime = selectedTime;
      $ctrl.selectedDay = selectedDay;
      service.saveClicked(whatsClicked);
      console.log(whatsClicked);
    }

    $ctrl.infoToShow = function(){
      $location.path("/message");
      console.log(this);
    }
    apiService.getForecastForLocation(service.getInfo().city).then(function(data){
      //Accessing the days and icons using JSON
      var dayNames = data.time.startPeriodName;
      var iconLinks = data.data.iconLink;
      console.log("data", data);
      console.log(dayNames);

      $ctrl.days = [];
      for(i=0; i<dayNames.length; i++){
        var dayObj = {
          day: dayNames[i],
          iconLink: iconLinks[i]
        }
        $ctrl.days.push(dayObj);
      }
      console.log($ctrl.days);

      $ctrl.days = $ctrl.days.filter(function(dayObj) {
        //Any day that end with Night, Tonight return false - don't show them
        if(dayObj.day.endsWith('Night')){
          return false;
        }
        else if(dayObj.day.endsWith('Tonight')){
          return false;
        }
        else {
          return true;
        }
      });
      // Only show the first day as today.
      $ctrl.days[0].day = "Today";
    });

  }
};
      //API service has getForecastForLocation() Series of if/else if/else
      //to filter out the data from the api. Only want the day and today.
  angular
  .module("GoodNeighborApp")
  .component("scheduleComponent", scheduleComponent);
}());
