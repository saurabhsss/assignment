function  map(array, square) {
    var i = 0;
    var b = new Array(array.length);
    //var j =0;
    while (i<array.length)
    {
        b[i] = square(array[i]);
        i=i+1;

    }
   return b;
}

function square(a) {
  //  console.log()
    return a*a;
}
//console.log("enter no. of element in array");

var newarray=map([1,23,45,5],square);

for(var i=0;i<newarray.length;i++) {
    console.log(i+":"+newarray[i]);
}
console.log(newarray);