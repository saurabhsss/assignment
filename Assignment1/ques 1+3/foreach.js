function  foreach(array, some_action) {
    var i = 0;
    while (i<array.length)
    {
        some_action(array[i]);
        i=i+1;

    }
}

function square(a) {
    //  console.log()
    return a*a;
}
//console.log("enter no. of element in array");
var b = new Array(4);
b[0] = 1;
b[1] = 23;
b[2] = 45;
b[3] = 5;
foreach(b,square);

for(var i=0;i<b.length;i++) {
    console.log(i+":"+b[i]);
}
