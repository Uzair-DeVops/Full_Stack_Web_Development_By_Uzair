;
var Mark = {
    fullName: "Mark",
    mass: 78,
    height: 1.69,
    bmiValue: 0,
    HigherBMI: false,
    BMI: function () {
        this.bmiValue = this.mass / (this.height * this.height);
        return this.bmiValue;
    }
};
var John = {
    fullName: "John",
    mass: 92,
    height: 1.95,
    bmiValue: 0,
    HigherBMI: false,
    BMI: function () {
        this.bmiValue = this.mass / (this.height * this.height);
        return this.bmiValue;
    }
};
Mark.BMI();
John.BMI();
if (Mark.bmiValue > John.bmiValue) {
    console.log("".concat(Mark.fullName, "'s BMI (").concat(Mark.bmiValue, ") is higher than John's !"));
    Mark.HigherBMI = true;
}
else {
    console.log("".concat(John.fullName, "'s BMI (").concat(John.bmiValue, ") is higher than Mark's !"));
    Mark.HigherBMI = false;
}
console.log(Mark);
