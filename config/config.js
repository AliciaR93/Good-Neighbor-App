//Routing
(function() {
    angular
      .module("GoodNeighborApp")
      .config(function($routeProvider) {
          $routeProvider
          .when("/welcome", {
          template: "<welcome-component></welcome-component>"
          })
          .when("/schedule", {
          template: "<schedule-component></schedule-component>"
          })
          .when("/message", {
          template: "<message-component></message-component>"
          })
          .when("/select", {
          template: "<select-component></select-component>"
          })
          .otherwise({redirectTo: "/welcome"});
          });
      }());
