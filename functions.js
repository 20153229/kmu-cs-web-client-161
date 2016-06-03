var str1 = "hello homework3"
console.log(str1);

function stringToInt(input) {
    var num = parseInt(input);
    return num;
}

function maskNumber(input) {
    var mask_number;
    mask_number=input.substring(0,7)+"****";
    return mask_number;
}

function getAverage(input_array) {
    var num = 0;
    var index = 0;
    while (input_array[index] != undefined) {
        num += input_array[index];
        index++;
    }
    var avg = parseFloat(num / index);
    return avg;
}

function isMultipleSeven(input) {
    if (input % 7 == 0) {
        return true;
    } else {
        return false;
    }
}

function operation(arg1, arg2, arg3) {
    switch (arg1) {
        case "add":
            return arg2 + arg3;
        case "substract":
            return arg2 - arg3;
        case "multiply":
            return arg2 * arg3;
        case "divide":
            return arg2 / arg3;
        default:
            console.log("Not Supported");
    }
}

function triangleMtn(input) {
    for (var count = 1; count <= input; count++) {
        var output = "";
        for (var count2 = 0; count2 < count; count2++) {
            output += "*";
        }
        console.log(output);
    }
}