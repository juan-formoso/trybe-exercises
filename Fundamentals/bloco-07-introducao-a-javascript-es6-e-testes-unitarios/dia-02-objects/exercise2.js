const lesson1 = {
  materia: 'JavaScript',
  numeroEstudantes: '10',
  professor: 'Fulano',
  turno: 'manhã'
};

const lesson2 = {
  materia: 'HTML',
  numeroEstudantes: '10',
  professor: 'Ciclano',
};

const lesson3 = {
  materia: 'CSS',
  numeroEstudantes: '10',
  professor: 'Trajano',
  turno: 'noite'
}

const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));

const sizeObj = (obj) => Object.keys(obj).length;
console.log(sizeObj(lesson1));

const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
const getNumberOfStudents = (obj) => {
  let total = 0;
  const arr = Object.keys(obj);
  for (i in arr) {
    total += obj[arr[i]].numeroEstudantes;
  }
  return total;
}
console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (obj, num) => Object.values(obj)[num];
console.log(getValueByNumber);

const verifyPair = (obj, key, value) => {
  const arr = Object.keys(obj);
  let isEqual = false;
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
  }
  return isEqual;
}
console.log(verifyPair(lesson2, 'professor', 'Ciclano'));

const getNumberOfStudentsJS = (obj) => {
  let total = 0;
  const arr = Object.keys(obj);
  for (i in arr) {
    if(obj[arr[i]].materia === 'JavaScript') {
      total += obj[arr[i]].numeroEstudantes;
    }
  }
  return total;
}
console.log(getNumberOfStudentsJS(allLessons));

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const arr = Object.values(obj);
  for (i in arr) {
    if (arr[i].professor === name) {
      allLessons.push(arr[i].materia);
      allStudent += arr[i].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Fulano'));
