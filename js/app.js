// zadanie 1

function getSqrt(n) {
  return Math.sqrt(n);
}


// zadanie 2
function concatArray(array1, array2) {
  return array1.concat(array2);
}


// zadanie 3
function bigestSumOfTwoElements(array){
  array.sort(function(a, b){return b - a});
  return array[0]+array[1];
}


// zadanie 4
function addPy(string){
  if (typeof(string)!=='string')
    return 'Argument funkcji musi być typu string!';
  if(string[0]+string[1]==='Py')
    return string;
  //let string2add = 'Py';
  return 'Py'.concat(string);
}


// zadanie 5
function removeChar(string, pos){
  return string.substring(0, pos)+string.substring(pos+1);
}


//zadanie 6
function removeDuplicates(string){
  for(let i=0; i<string.length; i++){
    if(string[i]===string[i-1]){
      string = removeChar(string, i);
      // string = string.substring(0, i)+string.substring(i+1);
      i--;
    }
  }
  return string;
}


//zadanie 7
function getNegativeNumbers(array){
  array = array.filter(function(number){
    return(number<0);
  });
  if(array.length===0){
    return 'Nie znaleziono ujemnych liczb';
  }
  return array;
}


//zadanie 8
function forEach(array, callback){
  //Jeśli nieprawidowe argumenty, to zwróć info
  if(!(Array.isArray(array) && typeof(callback)==='function')){
    return 'U need to pass in array and function!';
  }
  for(let i=0; i<array.length; i++){
    callback(array[i]);
  }
}


//zadanie 9
function map(array, callback){
  //Jeśli nieprawidowe argumenty, to zwróć info
  if(!(Array.isArray(array) && typeof(callback)==='function')){
    return 'U need to pass in array and function!';
  }
  let newarray=[];
  for(let i=0; i<array.length; i++){
    newarray.push(callback(array[i]));
  }
  return newarray;
}


//zadanie 10
function filter(array, callback){
  //Jeśli nieprawidowe argumenty, to zwróć info
  if(!(Array.isArray(array) && typeof(callback)==='function')){
    return 'U need to pass in array and function!';
  }
  let newarray=[];
  for(let i=0; i<array.length; i++){
    if(callback(array[i])){
      newarray.push(array[i]);
    }
  }
  return newarray;
}


//zadanie 11
