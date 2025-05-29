let student1 = {
    rollNumber: 201,
    name: "sam",
    city: "karve"
};

let student2 = {
    rollNumber: 202,
    name: "shiv",
    city: "kothrud"
};

let student3 = {
    rollNumber: 203,
    name: "kiran",
    city: "narhe"
};

let student4 = {
    rollNumber: 204,
    name: "gaurav",
    city: "shivaji nagar"
};

let printStudentDetails = function(subject, marks) {
    console.log(this.rollNumber + " " + this.name + " " + this.city + " " + subject + " " + marks);
};

 printStudentDetails.call(student1, "Math", 95);

printStudentDetails.apply(student2, ["Science", 88]);

let Student3details = printStudentDetails.bind(student3, "English", 91);
Student3details();

let Student4details = printStudentDetails.bind(student4,"History", 85);
Student4details()
