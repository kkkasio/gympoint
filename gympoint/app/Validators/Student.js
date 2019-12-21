'use strict';

const Antl = use('Antl');

class Student {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: 'required',
      email: 'required|email|unique:students,email',
      birthday: 'required|date',
      weight: 'required|float',
      height: 'required|integer'
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Student;
