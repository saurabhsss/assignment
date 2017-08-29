function  setTimeout(callback,milliseconds) {
    var d = new Date();
    while (new Date() -d <milliseconds)
    {
        //do nothing
    }
    callback(milliseconds);

}
function callback(milli) {
    console.log("Hello waited for "+ milli);
}

setTimeout(callback,3000);


