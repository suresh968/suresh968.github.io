//Ropani to Sq.Ft.
function getValues_r_sft(val){
var numVal1=parseFloat(document.getElementById("Ropani_i").value);
var numVal2=parseFloat(document.getElementById("Aana_i").value);
var numVal3=parseFloat(document.getElementById("Paisa_i").value);
var numVal4=parseFloat(document.getElementById("Daam_i").value);
var totalr_sft = (numVal1 * 5476) + (numVal2 * 342.25) + (numVal3 * 85.5265) + (numVal4 * 21.390625000);
document.getElementById("r_sft_o").value = totalr_sft;
}

// Reset Values Ropani Input
function rst_r_sft_v(){
document.getElementById("Ropani_i").value=0;
document.getElementById("Aana_i").value=0;
document.getElementById("Paisa_i").value=0;
document.getElementById("Daam_i").value=0;
document.getElementById("r_sft_o").value=0;
}

// Sq.ft. to Ropani
function getValues_sft_r(val){
var numVal1=parseFloat(document.getElementById("sft_r_i").value);
var numVal2=parseFloat(numVal1 / 5476);
var numVal3=Math.floor(numVal2);

var numVal4=((numVal2 - numVal3) * 16);
var numVal5=Math.floor(numVal4);
var numVal6=((numVal4 - numVal5) * 4);
var numVal7=Math.floor(numVal6);
var numVal8=(((numVal6 - numVal7) * 4)).toPrecision(5);

document.getElementById("Ropani_o").value = numVal3;
document.getElementById("Aana_o").value = numVal5;
document.getElementById("Paisa_o").value = numVal7;
document.getElementById("Daam_o").value = numVal8;
}

// Reset Values Sqft to Ropani Input
function rst_sft_r_v(){
document.getElementById("sft_r_i").value=0;
document.getElementById("Ropani_o").value = 0;
document.getElementById("Aana_o").value = 0;
document.getElementById("Paisa_o").value = 0;
document.getElementById("Daam_o").value = 0;
}


//Bigha to Sq.Ft.
function getValues_b_sft(val){
var numVal1=parseFloat(document.getElementById("Bigha_i").value);
var numVal2=parseFloat(document.getElementById("Kattha_i").value);
var numVal3=parseFloat(document.getElementById("Dhur_i").value);
var totalb_sft = (numVal1 * 72900) + (numVal2 * 3645) + (numVal3 * 182.25);
document.getElementById("b_sft_o").value = totalb_sft;
}

// Reset Values Bigha Input
function rst_b_sft_v(){
document.getElementById("b_sft_o").value=0;
document.getElementById("Bigha_i").value=0;
document.getElementById("Kattha_i").value=0;
document.getElementById("Dhur_i").value=0;
}

// Sq.ft. to Bigha
function getValues_sft_b(val){
var numVal1=parseFloat(document.getElementById("sft_b_i").value);
var numVal2=parseFloat(numVal1 / 72900);
var numVal3=Math.floor(numVal2);

var numVal4=((numVal2 - numVal3) * 20);
var numVal5=Math.floor(numVal4);
var numVal6=(((numVal4 - numVal5) * 20)).toPrecision(5);

document.getElementById("Bigha_o").value = numVal3;
document.getElementById("Kattha_o").value = numVal5;
document.getElementById("Dhur_o").value = numVal6;
}

// Reset Values sft to Bigha Input
function rst_sft_b_v(){
document.getElementById("sft_b_i").value=0;
document.getElementById("Bigha_o").value = 0;
document.getElementById("Kattha_o").value = 0;
document.getElementById("Dhur_o").value = 0;
}