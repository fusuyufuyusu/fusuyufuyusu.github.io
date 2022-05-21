function typeFunction(komering, huruf) {
  let kataKomering = document.getElementById("InputField").value;
  let kataHuruf = document.getElementById("AlfabetField").value;
  document.getElementById("InputField").value = kataKomering + komering;
  document.getElementById("AlfabetField").value = kataHuruf + huruf;
}

function typedel1Function(komering, huruf) {
  let kataKomering = document.getElementById("InputField").value;
  let kataHuruf = document.getElementById("AlfabetField").value;
  let panjangString = kataHuruf.length - 1;
  kataHuruf = kataHuruf.slice(0, panjangString);
  document.getElementById("InputField").value = kataKomering + komering;
  document.getElementById("AlfabetField").value = kataHuruf + huruf;
}

function deleteFunction() {
  document.getElementById("InputField").value = "";
  document.getElementById("AlfabetField").value = "";
}
