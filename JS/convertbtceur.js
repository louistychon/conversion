function conversionbtceur()
{
  let nombre = parseFloat(document.getElementById("nombreBTC").value);
  if(nombre >= 0){
    var total = nombre * 33385.19;
    var dec = total.toFixed(2);
  }
  else{
    alert("Veuillez entrer un nombre >= 0 !")
  }

  document.getElementById("resultat").value = dec + ' €';
}
