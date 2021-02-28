class Person {
  constructor(id) {
    this.id = id;
  }
}

class Table {
  constructor(id) {
    this.seats = [];
    this.id = id;
  }
  sit(person) {
    this.seats.push(person);
  }
}

class Course {
  constructor(tables) {
    this.tablesCount = tables;
    this.tablesArray = [];
    for (var i = 0; i < this.tablesCount; i++) {
      this.tablesArray.push(new Table(i));
    }
  }
}

const changeArrayIndexes = (persons, seats) => {
  const personLastIndex = persons.length - 1;
  swappedIndexes = new Array();
  newIndex = new Number();
  persons.forEach((person, index) => {
    let newIndex = index * seats;
    while (newIndex > personLastIndex) {
      newIndex = newIndex - personLastIndex;
    }
    swappedIndexes.push(persons[newIndex]);
  });

  const lastRow = swappedIndexes.splice(persons.length - seats, seats);
  swappedIndexes = lastRow.concat(swappedIndexes);
  return swappedIndexes;
};

const main = (persons, courses, tables, seats) => {
  const personsArray = [];
  for (let i = 0; i < persons; i++) {
    personsArray.push(new Person(i));
  }
  const coursesArray = [];
  temporaryData = personsArray;
  for (let i = 0; i < courses; i++) {
    const course = new Course(tables);
    let swappedIndexes = changeArrayIndexes(temporaryData, seats);
    for (let j = 0; j < tables; j++) {
      for (let k = 0; k < seats; k++) {
        course.tablesArray[j].sit(swappedIndexes[j + k]);
      }
    }

    coursesArray.push(course);
    temporaryData = swappedIndexes;
  }
};

const persons = 30;
const courses = 3;
const tables = 5;
const seats = 6;
main(persons, courses, tables, seats);
