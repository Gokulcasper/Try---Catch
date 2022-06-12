let stud = {
  firstname: "Gokul",
  lastname: "Raj",
  get fullname() {
    return `${stud.firstname} ${stud.lastname}`;
  },

  set fullname(value) {
    if (typeof value != "string") {
      const err = new Error("it is not a string");
      throw err;
    }
    if (value.length <= 3) throw "Invalid Name";

    let values = value.split(" ");
    this.firstname = values[0];
    this.lastname = values[1] ?? ""; // ?? ""  is used to If lastname there execute normally . if it is not there execute only firstname
  },
};
try {
  // Defensive programming
  stud.fullname = "a";
} catch (ex) {
  alert(ex);
}
console.log(stud.fullname);
