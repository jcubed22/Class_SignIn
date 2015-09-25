classSignIn.controller('AttendanceCtrl', function AttendanceCtrl($scope, StudentsFactory) {
  $scope.StudentsFactory = StudentsFactory;
  $scope.students = StudentsFactory.students;

  $scope.signIn = function(student) {
    student.isHere = true;
  };

  $scope.signOut = function(student) {
    student.isHere = false;
  };

  $scope.deleteStudent = function(student) {
    var index = $scope.students.indexOf(student);
    $scope.students.splice(index, 1);
  };
});
