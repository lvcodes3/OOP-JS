class AddMachine {
    // private class variables
    #firstNumber;
    #secondNumber;

    constructor(num1 = 0, num2 = 0) {
        this.#firstNumber = num1;
        this.#secondNumber = num2;
    }

    // getters
    get firstNumber() {
        return this.#firstNumber;
    }
    get secondNumber() {
        return this.#secondNumber;
    }

    // setters
    set firstNumber(number) {
        this.#firstNumber = number;
    }
    set secondNumber(number) {
        this.#secondNumber = number;
    }

    // method (single responsibility concept)
    addNumbers() {
        return this.#firstNumber + this.#secondNumber;
    }
}