
function Student(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.courses = [];
}

Student.prototype.name = function () {
    return `${this.fname} ${this.lname}`;
};

Student.prototype.enroll = function (course) {
    if (!this.courses.includes(course)) {
        this.courses.forEach(crs => {
            if (crs.conflictsWith(course)) {
                throw "Course conflict";
            }
        });

        this.courses.push(course);
        course.addStudent(this);
    }
};

Student.prototype.courseLoad = function () {
    const courseLoad = {};
    this.courses.forEach(course => {
        let dpt = course.department;
        courseLoad[dpt] = courseLoad[dpt] || 0;
        courseLoad[dpt] += course.credits;
    });
};