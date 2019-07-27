module.exports = {
    calculator: {
        add: (num1, num2) => {
            // Here we add the two numbers
            // if( typeof num1 != "number" && typeof num2 != "number" ) {
            //     return "error"
            // }
            return num1 + num2
        },
        substract: (num1, num2) => {
            // Here we substract the two numbers
            // if( typeof num1 != "number" && typeof num2 != "number" ) {
            //     return "error"
            // }
            return num1 - num2
        },
        divide: (num1, num2) => {
            // Here we divide the two numbers
            // if( typeof num1 != "number" && typeof num2 != "number" ) {
            //     return "error"
            // }
            return num1 / num2
        },
        multiply: (num1, num2) => {
            // Here we multiply the two numbers
            // if( typeof num1 != "number" && typeof num2 != "number" ) {
            //     return "error"
            // }
            return num1 * num2
        }
    }
}