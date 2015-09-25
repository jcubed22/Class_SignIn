var classSignIn = angular.module('classSignIn', ['ui.router']);

classSignIn.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('signin', {
    url: "signin",
    templateUrl: "partials/signin.html"
  });
});
