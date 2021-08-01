const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(" ").join("_");
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('João Lucas'),
    id2: callback('Yvanna Formoso'),
    id3: callback('Ricardo Almeida'),
  };
  return employees;
};
console.log(newEmployees(employeeGenerator));
