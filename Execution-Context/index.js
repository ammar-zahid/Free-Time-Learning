function outer() {
    var a = 12;
    let b = 45;
    
    console.log(a)
    console.log(b)
    console.log(c)

    function inner() {
        var c = 53;
    }
    
    inner()
}

outer()