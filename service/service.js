(function() {
  function service($location, $q) {
    //TODO $http will need to be injected in the service
    //Object stores name, address, city, state, zip, selected service.
    var info = {
      city: "Detroit, MI"
    };
    var whatsClicked = {};
    var type = "";
    return {
      getInfo: getInfo,
      setInfo: setInfo,
      saveClicked: saveClicked,
      getClicked: getClicked,
      sendType: sendType,
      getType: getType
    }
    function setInfo(information) {
      info = information;
    }

    function saveClicked(clicked) {
      whatsClicked = clicked;
    }
    function getInfo(){
      return info;
    }
    function getClicked() {
      return whatsClicked;
    }
    function sendType(selected){
      type = selected;
      console.log(type);
    }
    function getType(){
      return type;
    }
    // function getReceipt(){
    // determine from info object already on service what receipt should be,
    //return cost, other service variables
    //in receipt component:
    // $ctrl.receipt = service.getReceipt()
    // }

  }

  angular
    .module("GoodNeighborApp")
    .factory("service", service);
}());
