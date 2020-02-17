function Student(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.rating = [];
    this.rating.length = 30;
    this.attendance = [];
    this.attendance.length = 30;
    const undef = 'undefined';
    const limitlength = 30;
    this.age = function() {
        return (new Date).getFullYear() - birthYear;
    };
    this.average = function(){
        const filterValue = this.rating.filter(value => value !== undef);
        const sumValue = filterValue.reduce((firstValue, currentValue) => firstValue += currentValue);
        return sumValue / filterValue.length;
    };
    this.present = function() {
        const checkValue = function(currentValue) {
            return currentValue === undef;
        };
        const searchIndex = this.attendance.findIndex(checkValue);
        if (this.attendance.length <= limitlength) {
            return this.attendance[searchIndex] = true;
        }
    };
    this.absent = function() {
        const checkiValue = function(currentValue) {
            return currentValue === undef;
        };
        const searchIndex = this.attendance.findIndex(checkiValue);
        if (this.attendance.length <= limitlength) {
            return this.attendance[searchIndex] = false;
        }
    };
    this.mark = function(studentMark) {
        const checkiValue = function(currentValue) {
            return currentValue === undef;
        };
        const searchIndex = this.rating.findIndex(checkiValue);
        if (this.rating.length <= 30 && studentMark >= 0 && studentMark <= 10 && typeof(studentMark) === 'number') {  // eslint-disable-line 
            return this.rating[searchIndex] = studentMark;
        }
    };
    this.avGattendance = function(){
        const filterValue = this.attendance.filter(value => value !== undef);
        const sumValue = filterValue.reduce((firstValue, currentValue) => firstValue += currentValue);
        return sumValue / filterValue.length;
    };
    this.summary = function() {
        const limitMark = 9;
        const limitCoefficient = 9;
        if (this.average() >= limitMark && this.avGattendance() >= limitCoefficient) {
            return 'Ути какой молодчинка!';
        } else if (this.average() < limitMark && this.avGattendance() < limitCoefficient) {
            return 'Редиска!';
        } else {
            return 'Норм, но можно лучше';
        }
    };
}

const olga = new Student('Olga', 'Werdana', 1990);  // eslint-disable-line 
const wanda = new Student('Wanda', 'Milson', 1995);  // eslint-disable-line 
const alan = new Student('Alan', 'Dolphig', 1998);   // eslint-disable-line 


const a = 10;
const b = 8;
const c = 6;
const d = 2;
olga.absent();
olga.present();
olga.mark(a);
olga.mark(b);
olga.mark(a);
olga.mark(b);
olga.mark(a);
olga.mark(b);
olga.mark(a);
olga.mark(b);
olga.mark(a);
olga.mark(b);
olga.mark(a);
olga.mark(b);
olga.mark(a);
olga.mark(b);
olga.mark(a);
olga.mark(b);
olga.mark(a);
olga.mark(b);
olga.mark(a);
olga.mark(b);
olga.mark(a);
olga.mark(b);
olga.mark(a);
olga.mark(b);
wanda.mark(c);
wanda.present();
alan.absent();
alan.mark(d);

// console.log(olga.summary());
console.log(olga.average());

