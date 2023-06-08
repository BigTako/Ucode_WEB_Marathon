function checkDivision(beginRange, endRange) {
    var s;
    var f;

    if (beginRange.length == 0 || endRange.length== 0 || beginRange == undefined || endRange == undefined) {
        s = 1;
        f = 100;
    }else{
        s = beginRange.valueOf() - 0;
        f = endRange.valueOf() - 0;
    }
    
    for (var index = s; index <= f; index++) {
        var str = new String(index);
        if (index % 2 == 0) {
            str += " is even";
        }

        if (index % 3 == 0) {
            if (str.length != String(index).length)
                str += ", a multiple of 3";
            else 
                str += " is a multiple of 3";
        }

        if (index % 10 == 0) {
            if (str.length != String(index).length)
                str += ", a multiple of 10";
            else 
                str += "is a multiple of 10";
        }
        if (str.length == String(index).length) {
            str += " -";
        } 
        console.log(str);
    }
}

var beginRange = prompt("BeginRange number: ");
var endRange =  prompt("EndRange number: ");
checkDivision(beginRange, endRange);