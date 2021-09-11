function checkQuantity() {
    let pizzaInput = document.getElementById('quantity').value;
    pizzaInput = Number(pizzaInput); //Convert string to number data type

    // declare the pizza pirces for the calculations
    
    var pizzaPrice = 6.45;
    var pizzaPrice2 = 12.00;
    var pizzaPrice3 = 14.00;

    var pizzaCost = 0;

    // Perform Validation check
    
    if (!pizzaInput || pizzaInput < 1) {
        if (!pizzaInput) {
            document.getElementById("message").innerHTML = "Please enter a valid pizza quantity";
        } else {
            document.getElementById("message").innerHTML = "Minimum pizza order is 1.";
        }

        document.getElementById("quantity").select();
        return false;
    }

    // Check input number between 1 and 3

    switch(pizzaInput) {
        case 1:
            pizzaCost += pizzaPrice;
            break;
        case 2:
            pizzaCost += pizzaPrice2;
            break
        case 3:
            pizzaCost += pizzaPrice3;
            break;
        default:
            let total = pizzaInput;

    // Perform maths if inputer >4

            do {
                let pizzaInt = (total / 3);

                if (pizzaInt >= 1) {
                    pizzaInt = Math.floor(pizzaInt);

                    pizzaCost += (pizzaInt * pizzaPrice3);
                    total -= pizzaInt * 3;
                } else {
                    if (total == 2 || total == 1) {
                        if (total == 2) {
                            total -= total;
                            pizzaCost += pizzaPrice2;
                        } else {
                            total -= total;
                            pizzaCost += pizzaPrice;
                        }
                    }
                }

            } while (total != 0);
    }
    // Print total cost to the page
    
    document.getElementById("message").innerHTML = `The cost of ${pizzaInput} pizza${(pizzaInput > 1 ? "'s" : "")} is ${pizzaCost}`;
    return false;
}