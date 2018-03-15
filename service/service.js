(function() {
  function service($location, $q) {
    //Object stores name, address, city, state, zip, selected service.
    var info = {
      city: "",
      lot: "",
      drive: ""
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

  }

  angular
    .module("GoodNeighborApp")
    .factory("service", service);
}());
