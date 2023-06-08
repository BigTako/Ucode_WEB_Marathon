class HardWorker {
    constructor() {
      this.name; // field to store the value
      this._age;
      this._salary;
    }
  
    get age() {
      return this._age;
    }
  
    get salary() {
      return this._salary;
    }
  
    set age(value) {
      if (value >= 1 && value < 100) {
        this._age = value;
      }
    }
  
    set salary(value) {
      if (value >= 100 && value < 10000) {
        this._salary = value;
      }
    }
  
    toObject() {
      return {
        name: this.name,
        age: this.age,
        salary: this.salary,
      };
    }
}

export default HardWorker;