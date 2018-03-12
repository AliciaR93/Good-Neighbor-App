(function() {
  function clickedState () {
    return {
      link: function($scope, $element, $attrs) {
        $element.on("click", function () {
          
          this.classList.toggle("selected");
      });
    }
  }
  }
  angular
    .module("GoodNeighborApp")
  .directive("clickedState", clickedState);

}());
