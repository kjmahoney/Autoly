var Users = []
var Drivers = []
var Addresses = []

class User{
  constructor(firstName, lastName, homeAddress, workAddress, phone, id, dropOffAddress){
    this.firstName = firstName,
    this.lastName = lastName,
    this.homeAddress = homeAddress,
    this.workAddress = workAddress,
    this.phone = phone,
    this.id = id,
    this.dropOffAddress = dropOffAddress,
    this.vehicle = []
  }
  newCar(car){
    this.vehicle.push(car)
  }

  // newCar(make, model, color, plateID, plateState){
  //   var car2 = new Vehicle(make, model, color, plateID, plateState)
  //   this.vehicle.push(car2)

}
class Driver{
  constructor(firstName, lastName, img_url, id){
    this.firstName = firstName,
    this.lastName = lastName,
    this.img_url = img_url,
    this.id = id
  }
}

class Vehicle{
  constructor(make, model, color, plateID, plateState, imgUrl){
    this.make = make,
    this.model = model,
    this.color = color,
    this.plateID = plateID,
    this.plateState = plateState,
    this.imgUrl = imgUrl
  }
}
// function populate(seedData){
//  console.log(seedData)
// }

var seed = function(){
  const Kevin = new User("Kevin", "Mahoney", "229 G Street SW", "228 North Arlington", 1234567890, 1, "516 Main Street")
  const Khoi = new User("Khoi", "Le", "123 H Street NW", "229 North Arlington", 1234567891, 2, "2122 Alpaca Ave" )

  const Accord = new Vehicle("Honda", "Accord", "Red","JXH-7345", "VA", "http://www.egmcartech.com/wp-content/uploads/2012/09/2013hondaaccord-04.jpg")
  const Altima = new Vehicle("Nissan", "Altima", "White","VRG-6789", "DC", "http://www.egmcartech.com/wp-content/uploads/2012/09/2013hondaaccord-04.jpg")

  Kevin.newCar(Accord)
  Kevin.newCar(Altima)
  Users.push(Kevin, Khoi)

  const Jay = new Driver("Jay", "Corleone", "http://www.thesimpledollar.com/wp-content/uploads/2014/11/uber-driver-600x400.jpg", 1 )
  const Thomas = new Driver ("Thomas", "Smith", "https://expertbeacon.com/sites/default/files/obtaining_affordable_auto_insurance_as_a_high-risk_driver.jpg", 2)
  Drivers.push(Jay, Thomas)

}



seed()
module.exports = {
Users: Users,
Drivers: Drivers,
}
