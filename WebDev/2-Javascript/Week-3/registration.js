class Student {
	constructor(name, email) {
		//should add validation for name and email
		this.name = name;
		this.email = email;
	}	
												
}

class Bootcamp {
	constructor(name, level, students = []) {
		this.name = name;
		this.level = level;
		this.students = students;
	}
	registerStudent(studentToRegister) {//student to register is an object with name and email
		if (typeof studentToRegister !== "object" || !studentToRegister.name || !studentToRegister.email) {
			console.log(`Invalid name or email`);
			return false;
		}
		if (
			this.students.find((student) => student.email === studentToRegister.email)
		) {
			console.log(
				`The email address ${studentToRegister.email} is already registered`
			);
			return false;
		} else {
			// this.students.push(studentToRegister)
			this.students.push(new Student(studentToRegister.name, studentToRegister.email));
			console.log(
				`Successfully registered ${studentToRegister.email} to the bootcamp ${this.name}`
			);
			return true;
		}
	}
	listStudents() {
		if (!this.students.length) {
			console.log(`No students are registered to the ${this.name} bootcamp.`);
			return false;
		} else {
            console.log(`Students registered for ${this.name} are:`);
            this.students.forEach((student) => {
                console.log(student.name)
            })
            return true;
        }
	}

    getInfo(){
		console.log(`Bootcamp: ${this.name}, Level: ${this.level}`);
        return `Bootcamp: ${this.name}, Level: ${this.level}`;
	}

	removeStudent(email){
		//this.students = this.students.filter((student) => {
		//	return student.email !== email;
		//});
		let foundEmail = false;
	    this.students.forEach((student, i) => {
		   if (student.email === email){
			foundEmail = true;
			this.students.splice(i, 1);
			console.log(`Removed ${student.name} from ${this.name} Bootcamp`)
		   }
		})
		if(!foundEmail){
			console.log(`No student with the email ${email} found in our records`)
			return `No student with the email ${email} found in our records`;

		}
	
}
}

//Tests
testStudent = new Student("Bugs Bunny", "bugs@bunny.com");
console.log(testStudent);
if (
	testStudent.name === "Bugs Bunny" &&
	testStudent.email === "bugs@bunny.com"
) {
	console.log("TASK 1: PASS");
}

reactBootcamp = new Bootcamp("React", "Advanced");
// console.log(reactBootcamp);
console.log(reactBootcamp.getInfo(), 'test getInfo method')
if (
	reactBootcamp.name === "React" &&
	reactBootcamp.level === "Advanced" &&
	Array.isArray(reactBootcamp.students) &&
	reactBootcamp.students.length === 0
) {
	console.log("TASK 2: PASS");
}

const runTest = (bootcamp, student) => {
	const attemptOne = bootcamp.registerStudent(student);
	const attemptTwo = bootcamp.registerStudent(student);
	const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
	if (attemptOne && !attemptTwo && !attemptThree) {
		console.log("TASK 3: PASS");
	}

	bootcamp.registerStudent(new Student("Babs Bunny", "babs@bunny.com"));
	if (bootcamp.listStudents()) {
		console.log("TASK 4: PASS 1/2");
	}
	bootcamp.students = [];
	if (!bootcamp.listStudents()) {
		console.log("TASK 4: PASS 2/2");
	}
 
	bootcamp.registerStudent(new Student("Donald Duck", "donald@duck.com"))
	bootcamp.registerStudent(new Student("Elmer Fudd", "elmer@fudd.com"))
	bootcamp.registerStudent(new Student( "Sylvester", "sylvester@loonytunes.com"))
	bootcamp.registerStudent(new Student("Tweety", "tweety@loonytunes.com"));
	console.log(bootcamp.students,'students after registration')
    bootcamp.removeStudent('elmer@fudd.com');
	console.log(bootcamp.students, "students after remove elmer fudd");
    bootcamp.removeStudent('otheremail@com')
};

runTest(reactBootcamp, testStudent);
