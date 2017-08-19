

if(isPrime(ctr)==true)
 {
  primeNumbs[primeNumbs.length] = ctr;
  }
  ctr = ctr+1;
}
 if (primeNumbs.length == 0)
{
document.getElementById('output_content').innerHTML = "There were no prime no within the range.";
 }
 else
 {
 outputPrimeNums(primeNumbs);
  }
}
function isPrime(num)
{
var flag = true;
for(var i=2; i<=Math.ceil(num/2); i++)
 {
if((num%i)==0)
{
flag = false;
 break;
}
}
return flag;
 }

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
