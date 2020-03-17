
function Student(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.courses = [];
}

Student.prototype.name = function () {
    return `${this.fname} ${this.lname}`;
};