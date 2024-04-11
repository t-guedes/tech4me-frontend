for (var i = 0; i < 10; i++) {
    //console.log(i, "EXTERNO");
    for (var j = 0; j < 10; j++){
        //console.log(j, "INTERNO");
        var cem = i * 10 + j;
        console.log(cem);
    }
}