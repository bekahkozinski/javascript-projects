// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:


try{
    function divide(x,y) {
        if (y === 0) {
            throw new Error("Attempted to divide by zero")
        }
        return x / y
    }
    console.log(divide(1, 0))
}
catch(error){
    console.error(error);
}
