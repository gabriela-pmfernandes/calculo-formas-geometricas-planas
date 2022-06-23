function calculoAreaDoQuadrado(){
    let baseDoQuadrado = parseFloat(document.getElementById("inputBaseDoQuadradoArea").value);
    let alturaDoQuadrado = parseFloat(document.getElementById("inputAlturaDoQuadradoArea").value);

    let areaDoQuadrado = baseDoQuadrado * alturaDoQuadrado;
    
    document.getElementById("inputResultadoDaAreaDoQuadrado").value = areaDoQuadrado;
}

function calculoPerimetroDoQuadrado(){
    let ladoDoQuadrado = parseFloat(document.getElementById("inputPerimetroDoQuadrado").value);

    let perimetroDoQuadrado = ladoDoQuadrado + ladoDoQuadrado + ladoDoQuadrado + ladoDoQuadrado;

    document.getElementById("inputResultadoDoPerimetroDoQuadrado").value = perimetroDoQuadrado;
}

function calculoAreaDoRetangulo(){
    let baseDoRetangulo = parseFloat(document.getElementById("inputBaseDoRetanguloArea").value);
    let alturaDoRetangulo = parseFloat(document.getElementById("inputAlturaDoRetanguloArea").value);

    let areaDoRetangulo = baseDoRetangulo * alturaDoRetangulo;

    document.getElementById("inputResultadoDaAreaDoRetangulo").value = areaDoRetangulo;
}

function calculoPerimetroDoRetangulo(){
    let baseDoRetangulo = parseFloat(document.getElementById("inputBaseDoRetanguloPerimetro").value);
    let alturaDoRetangulo = parseFloat(document.getElementById("inputAlturaDoRetanguloPerimetro").value);

    let perimetroDoRetangulo = 2 * (baseDoRetangulo + alturaDoRetangulo);

    document.getElementById("inputResultadoDoPerimetroDoRetangulo").value = perimetroDoRetangulo;
}

function calculoRaioDoCirculo(){
    let diametroDoCirculo = parseFloat(document.getElementById("inputDiametroDoCirculo").value);

    let raioDoCirculo = diametroDoCirculo / 2;

    document.getElementById("inputResultadoDoRaioDoDiametro").value = raioDoCirculo;
}

function calculoAreaDoCirculo(){
    let raioDoCirculo = parseFloat(document.getElementById("inputRaioDoCirculoArea").value);

    let areaDoCirculo = (Math.PI * (raioDoCirculo ** 2));

    document.getElementById("inputResultadoDaAreaDoCirculo").value = areaDoCirculo;
}

function calculoPerimetroDoCirculo(){
    let raioDoCirculo = parseFloat(document.getElementById("inputRaioDoCirculoPerimetro").value);

    let perimetroDoCirculo = 2 * Math.PI * raioDoCirculo;

    document.getElementById("inputResultadoDoPerimetroDoCirculo").value = perimetroDoCirculo;
}

function calculoAreaDoTrianguloRetangulo(){
    let baseDoTrianguloRetangulo = parseFloat(document.getElementById("inputBaseDoTrianguloRetanguloArea").value);
    let alturaDoTrianguloRetangulo = parseFloat(document.getElementById("inputAlturaDoTrianguloRetanguloArea").value);

    let areaDoTrianguloRetangulo = (baseDoTrianguloRetangulo * alturaDoTrianguloRetangulo) / 2;

    document.getElementById("inputResultadoDaAreaDoTrianguloRetangulo").value= areaDoTrianguloRetangulo;
}

function calculoHipotenusaDoTrianguloRetangulo(){
    let baseDoTrianguloRetangulo = parseFloat(document.getElementById("inputBaseDoTrianguloRetanguloHipotenusa").value);
    let alturaDoTrianguloRetangulo = parseFloat(document.getElementById("inputAlturaDoTrianguloRetanguloHipotenusa").value);

    let hipotenusaDoTrianguloRetangulo = Math.sqrt((baseDoTrianguloRetangulo) ** 2 + (alturaDoTrianguloRetangulo) ** 2); 
    
    document.getElementById("inputResultadoDaHipotenusaDoTrianguloRetangulo").value = hipotenusaDoTrianguloRetangulo;
}

function calculoDiagonalDoQuadrado(){
    let ladoDoQuadrado = parseFloat(document.getElementById("inputLadoDoQuadrado").value);

    let diagonalDoQuadrado = Math.sqrt(((ladoDoQuadrado) ** 2) + ((ladoDoQuadrado) ** 2));

    document.getElementById("inputResultadoDaDiagonalDoQuadrado").value = diagonalDoQuadrado;
}