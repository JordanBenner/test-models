

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
