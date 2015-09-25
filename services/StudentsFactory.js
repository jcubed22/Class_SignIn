classSignIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [{ name: "Johnny Student", isHere: false }, { name: "Jenny Studious", isHere: false }, { name: "That One Kid", isHere: false}, { name: "Wait, who?", isHere: false }, { name: "Polly Punctual", isHere: false }];
  factory.addStudent = function() {
    factory.students.push({ name: factory.studentName, isHere: false });
    factory.studentName = null;
  };
  return factory;
});
