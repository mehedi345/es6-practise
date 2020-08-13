class Student  {
    constructor(sId , sName){
        this.id = sId;
        this.name = sName;
        this.school = "PDB secondary school";
    }
}
const student1 = new Student(12, "shuvo");
const student2 = new Student(24, "mahiya mahi");
console.log(student1.name, student2.id);