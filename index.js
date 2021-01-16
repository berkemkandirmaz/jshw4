// 1.

let id = 1;

const listOfStudents = [];
const studentsOnBudget = [];

class Student {
  constructor(enrollee) {
    this.id = id++;
    Object.assign(this, enrollee);
    if (this.ratingPoint < 800) {
      this.isSelfPayment = true;
    } else {
      this.isSelfPayment = false;
      studentsOnBudget.push(this);
      studentsOnBudget.sort(function (min, max) {
        if (min.ratingPoint == max.ratingPoint) {
          return min.schoolPoint - max.schoolPoint;
        } else {
          if (min.ratingPoint > max.ratingPoint) {
            return 1;
          } else return -1;
        }
      });
      
      if (studentsOnBudget.length > 5) {
        for (let i = 0; i < listOfStudents.length; i++) {
          if (studentsOnBudget[0] == listOfStudents[i]) {
            listOfStudents[i].isSelfPayment = true;
          }
        }
        studentsOnBudget.splice(0, 1);
      }
    }
    listOfStudents.push(this);
  }
}

for (let student of studentArr) {
  new Student(student);
}

console.log(studentsOnBudget);


// 2.


class CustomString {
  constructor() {}

  reverse(str) {
    return str.split("").reverse().join("");
  }

  ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  ucWords(str) {
    return str.replace(/(^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }
}

const myString = new CustomString();

console.log(myString.reverse("qwerty"));
console.log(myString.ucFirst("qwerty"));
console.log(myString.ucWords("qwerty qwerty qwerty"));


// 3.


class Validator {
  constructor() {}

  checkIsEmail(str) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str);
  }

  checkIsDomain(str) {
    return /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/.test(str);
  }

  checkIsDate(str) {
    return /^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/.test(str);
  }

   checkIsPhone(str) {
    let cleanstr = str.replace(/[^\d]/g,'');
    return /^380+[0-9]{9}$/g.test(cleanstr);
  }
}

var validator = new Validator();

console.log(validator.checkIsEmail('vasya.pupkin@gmail.com')); // true
console.log(validator.checkIsDomain('google.com')); // true
console.log(validator.checkIsDate('30.11.2019')); // true
console.log(validator.checkIsPhone('+38 (066) 337-99-92')); // если код страны Украинский, то возвращаем true иначе false