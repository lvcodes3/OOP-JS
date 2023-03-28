let userAddMachine;

const createAddMachine = () => {
    if (document.getElementById("first-number").value === "" || document.getElementById("second-number").value === "") {
        userAddMachine = new AddMachine();
    }
    else {
        userAddMachine = new AddMachine(
            parseInt(document.getElementById("first-number").value),
            parseInt(document.getElementById("second-number").value)
        );
    }

    alert(userAddMachine.addNumbers());
}