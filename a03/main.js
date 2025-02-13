function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    halfTop(pHeight, pColorEven, pColorOdd, pSymbol);
    halfBottom(pHeight, pColorEven, pColorOdd, pSymbol);
}
    //Bottom half of rhombus
    function halfBottom(pHeight, pColorEven, pColorOdd, pSymbol){
        var hBottom ="";
        for (i = pHeight - 1; i> 0; i--){
            hBottom +="<p>";
                //Position changes depending on odd or even
                for (j = 0; j < i; j++){
                    //Even
                    if (j%2)
                        hBottom +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
                    //Odd
                    else
                        hBottom +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>"; 
                }
            hBottom +="</p>";
        }
        document.getElementById("halfBottom").innerHTML = hBottom;
    }
    //Top half of rhombus
    function halfTop(pHeight, pColorEven, pColorOdd, pSymbol){
        var hTop ="";
        for (i = 0; i < pHeight; i++){
            hTop +="<p>";
                //Position changes depending on odd or even
                for (j = 0; j <= i; j++){
                    if (j%2)
                    //Even
                        hTop +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
                    else
                    //Odd
                        hTop +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
                }
            hTop +="</p>";
        }
        document.getElementById("halfTop").innerHTML = hTop;
    }
