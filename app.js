var classSignIn = angular.module('classSignIn', ['ui.router']);

classSignIn.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('studentPage', {
    url: "signin",
    templateUrl: "partials/signin.html",
    controller: 'StudentsCtrl'
  });

  $stateProvider.state('teacherPage', {
    url: "attendance",
    templateUrl: "partials/attendance.html",
    controller: 'AttendanceCtrl'
  });
});
