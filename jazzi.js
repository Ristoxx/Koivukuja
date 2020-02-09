// Luodaan kuvasarjat jotka simuloivat arpakuutioita;
var noppa = ["1n1.png", "1n2.png", "1n3.png", "1n4.png", "1n5.png", "1n6.png"];
var noppa2 = ["2n1.png", "2n2.png", "2n3.png", "2n4.png", "2n5.png", "2n6.png"];
var noppa3 = ["3n1.png", "3n2.png", "3n3.png", "3n4.png", "3n5.png", "3n6.png"];
var noppa4 = ["4n1.png", "4n2.png", "4n3.png", "4n4.png", "4n5.png", "4n6.png"];
var noppa5 = ["5n1.png", "5n2.png", "5n3.png", "5n4.png", "5n5.png", "5n6.png"];
var noppa6 = ["6n1.png", "6n2.png", "6n3.png", "6n4.png", "6n5.png", "6n6.png"];
var noppa7 = ["7n1.png", "7n2.png", "7n3.png", "7n4.png", "7n5.png", "7n6.png"];
var noppa8 = ["8n1.png", "8n2.png", "8n3.png", "8n4.png", "8n5.png", "8n6.png"];
var noppa9 = ["9n1.png", "9n2.png", "9n3.png", "9n4.png", "9n5.png", "9n6.png"];
var hahmoNopat = ""; //tähän kerätään ensimmäiset 3 satunnaista kuvaa
var tarinaNopat = ""; //tähän kerätää seuraavat 9 satunnaista kuvaa kuvasarjoista

function hahmo() {
    hahmoNopat = hahmoNopat + "<img src='" + noppa[Math.round((Math.random() * 3) + 1)] + "' alt='Funny shape'>";
    hahmoNopat = hahmoNopat + "<img src='" + noppa2[Math.round((Math.random() * 3) + 1)] + "' alt='Funny shape'>";
    hahmoNopat = hahmoNopat + "<img src='" + noppa3[Math.round((Math.random() * 3) + 1)] + "' alt='Funny shape'>";
    document.getElementById("ima").innerHTML = hahmoNopat;
    //Tässä simuloidaan ensimmäisten 3 nopan heittoa. tarkempi kuvaus jäljempänä
}

function tarina() {
    tarinaNopat = tarinaNopat + "<img src='" + noppa[Math.round((Math.random() * 3) + 1)] + "' alt='Funny shape'>";
    tarinaNopat = tarinaNopat + "<img src='" + noppa2[Math.round((Math.random() * 3) + 1)] + "' alt='Funny shape'>";
    tarinaNopat = tarinaNopat + "<img src='" + noppa3[Math.round((Math.random() * 3) + 1)] + "' alt='Funny shape'>";
    tarinaNopat = tarinaNopat + "<img src='" + noppa4[Math.round((Math.random() * 3) + 1)] + "' alt='Funny shape'>";
    tarinaNopat = tarinaNopat + "<img src='" + noppa5[Math.round((Math.random() * 3) + 1)] + "' alt='Funny shape'>";
    tarinaNopat = tarinaNopat + "<img src='" + noppa6[Math.round((Math.random() * 3) + 1)] + "' alt='Funny shape'>";
    tarinaNopat = tarinaNopat + "<img src='" + noppa7[Math.round((Math.random() * 3) + 1)] + "' alt='Funny shape'>";
    tarinaNopat = tarinaNopat + "<img src='" + noppa8[Math.round((Math.random() * 3) + 1)] + "' alt='Funny shape'>";
    tarinaNopat = tarinaNopat + "<img src='" + noppa9[Math.round((Math.random() * 3) + 1)] + "' alt='Funny shape'>";
    document.getElementById("tarinat").innerHTML = tarinaNopat;
    //tässä arvotaan yksi kuva kutakin arpakuutiota kuvaavasta kuvasarjasta ja siten simuloidaan yhdeksän keskenään erilaisen
    //arpakuution heittämistä. Lopuksi kaikki yhdeksän kuvaa kerätään tarinaNopat muuttujaan ja tulostetaan HTML lomakkeelle
    //"tarinat" divin sisään.   
}

function nollaa() {
    var r = confirm("Haluatko nollata lomakkeen?");
    if (r == true) {
    hahmoNopat = "";
    tarinaNopat = "";
    document.getElementById("ima").innerHTML = hahmoNopat;
    document.getElementById("tarinat").innerHTML = tarinaNopat;
    document.getElementById("nimiKentta").value = "";
    document.getElementById("tarinaKentta").value = "";
    }    
    //tässä nollataan kaikki syötteet ja tulostuneet kuvat
}
