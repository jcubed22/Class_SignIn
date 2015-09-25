classSignIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.StudentsFactory = StudentsFactory;
  $scope.students = StudentsFactory.students;
});
