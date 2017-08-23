
myObj = {
   "name":"John",
   "age":30,
   "cars": [
       { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
       { "name":"BMW", "models":[ "320", "X3", "X5" ] },
       { "name":"Fiat", "models":[ "500", "Panda" ] }
   ]
}

for (i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j];
    }
}
