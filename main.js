

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

  var i, j;
    //outer loop
    for(i=1; i <= 5; i++)
     {
     //inner loop
      for(j=1; j<=i; j++)
     {
       document.write('*');
      }
       document.write('<br/>');
     }
