let opo =
  '{"employees":[' +
  '{"firstName":"krish","lastName":"radadiya" },' +
  '{"firstName":"sanket","lastName":"talaviya" },' +
  '{"firstName":"viren","lastName":"radadiya" }]}';

const iop = JSON.parse(opo);

console.log(iop.employees[1].firstName + " " + iop.employees[1].lastName);