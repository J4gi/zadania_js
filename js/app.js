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

}
