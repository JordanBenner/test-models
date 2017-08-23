
 function outputPrimeNums(primes)
 {
  var html = "<h2>Prime Numbers</h2>";
  for (i=0;i<primes.length;i++){
   html += primes[i] + "<br/>";
  }
  document.getElementById('output_content').innerHTML = html;
  }

  var doubled = arr.map(function (num) {
  return num * 2
});
setTimeout(function () {
  console.log('Paused 1 second.');
}, 1000);

for (i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j];
    }
}
