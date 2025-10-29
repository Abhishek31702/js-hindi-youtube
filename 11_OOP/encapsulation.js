class Student {
    #name = " ";
    #marks = 0;

    setName(name){
        this.#name = name;
        console.log(`Name of Student: ${name}`)
    }

    setMarks(marks){
        this.#marks = marks;
        if (marks > 100 || marks < 0){
            console.log("Invalid Marks")
        }
        else{
            console.log(`Marks of Student is ${marks}`)
        }
    }

    getName(){
        return this.#name;
    }

    getMarks(){
        return this.#marks;
    }
}

const newStudent = new Student();
newStudent.setName("Abhishek");
newStudent.setMarks(90);


// console.log("Name:", newStudent.getName())
// console.log("Marks:", newStudent.getMarks())