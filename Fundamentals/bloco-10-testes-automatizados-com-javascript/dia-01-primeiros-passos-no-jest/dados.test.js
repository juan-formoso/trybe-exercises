const searchEmployee = (id, detail) => {
  const employee = professionalBoard.find(employee => employee.id === id);

  if (!employee) {
    throw new Error("ID não identificada");
  };
  if (!employee[detail]) {
    throw new Error("Informação indisponível");
  };

  return employee[detail];
};


module.exports = searchEmployee;