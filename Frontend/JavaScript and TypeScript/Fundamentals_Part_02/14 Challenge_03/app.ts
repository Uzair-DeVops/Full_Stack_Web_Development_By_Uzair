interface Typing{
  fullName : string,
  mass : number,
  height : number,
  bmiValue :number,
  HigherBMI : boolean
  BMI(): number,
   
}
;
const Mark : Typing = {
  fullName: "Mark",
  mass : 78 ,
  height : 1.69 ,
  bmiValue : 0 ,
  HigherBMI : false,
  BMI: function(){
    this.bmiValue  = this.mass/(this.height * this.height) 
    return this.bmiValue
}
}
const John : Typing = {
  fullName: "John",
  mass : 92 ,
  height : 1.95 ,
  bmiValue : 0 ,
  HigherBMI : false,

  BMI: function(){
    this.bmiValue  = this.mass/(this.height * this.height) 
    return this.bmiValue
}}

Mark.BMI()
John.BMI()

if (Mark.bmiValue > John.bmiValue){
  console.log(`${Mark.fullName}'s BMI (${Mark.bmiValue}) is higher than John's !`)
  Mark.HigherBMI = true
}else {
  console.log(`${John.fullName}'s BMI (${John.bmiValue}) is higher than Mark's !`)
  Mark.HigherBMI = false

}

console.log(Mark)
