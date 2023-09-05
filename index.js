let Data =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(Data);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);
// Anna Smith
