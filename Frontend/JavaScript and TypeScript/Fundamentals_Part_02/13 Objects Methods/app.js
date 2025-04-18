var details = {
    firstName: "John",
    age: 23,
    occupation: "Software Engineer",
    hobbies: ["reading", "hiking", "coding"],
    birthYear: function () {
        return 2025 - this.age;
    },
    Adult: function () {
        return this.age > 18;
    }
};
console.log(details.birthYear());
console.log(details.Adult());
