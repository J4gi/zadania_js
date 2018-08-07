

# JavaScript Basics

## Wytyczne dotyczące githuba

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj repozytorium na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres repozytorium możesz znaleźć na stronie repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .`
Pamiętaj że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

## Uwagi dotyczące rozwiązywania zadań

* Pisz czytelny kod - nazwy zmiennych i funkcji powinny informować o ich zastosowaniu.
* Wszystkie zadania rozwiązuj w pliku app.js
* Rozdzielaj zadania komentarzami, tak żeby łatwo było odnaleźć się w dokumencie.

```JavaScript
// ZADANIE 1
Tu rozwiązanie zadania 1

// ZADANIE 2
etc...
```
* Jeśli nie wiesz jak coś zrobić - nie bój się pytać (najpierw google później slack ;)

---------------------------------------------------------------------

### Zadanie 1

Napisz funkcję o nazwie ```getSqrt(n)```, która przyjmuje jako parametr jedną liczbę. Niech funkcja ta zwraca pierwiastek tej liczby.

Przykład:

```JavaScript
getSqrt(4) // zwróci 2
getSqrt(16) // zwróci 4
```

### Zadanie 2

Napisz funkcję o nazwie ```concatArray(array1, array2)```, która przyjmuje jako parametry dwie tablice. Niech funkcja ta zwraca nową tablicę będącą połączeniem tych dwóch.

Przykład:

```JavaScript
 concatArray( [1,3],[3,5]]) // zwróci [1,3,3,5]
```


### Zadanie 3

Napisz funkcję ```bigestSumOfTwoElements(array)```, która przyjmuje tablicę z liczbami i **zwraca** sumę dwóch największych elementów z tej tablicy.
Dla uproszczenia możemy założyć, że przekazana tablica zawiera wyłącznie liczby.

* Jeżeli tablica zawiera tylko jeden element, funkcja powinna zwrócić wartość tego elementu.
* Jeżeli tablica zawiera zero elementów, funkcja powinna zwrócić wartość logiczną```false```.

Przykład:
```Javascript
bigestSumOfTwoElements([1,2,3,4]) // => 7 (3 + 4)
bigestSumOfTwoElements([]) // => false
bigestSumOfTwoElements([76]) // => 76
bigestSumOfTwoElements([23,45,17,12]) // => 68 (45 + 23)
```

### Zadanie 4

Napisz funkcję ```addPy(string)```, która przyjmuje jako parametr string i dopisuje na jego początku Py. Jeśli podany string zaczyna się od Py, wtedy po prostu go zwraca.

Przykład:
```JavaScript
addPy("thon"); // zwróci "Python"
addPy("Python); // zwróci "Python"
```

### Zadanie 5

Napisz funkcję ```removeChar(string, pos)```, która przyjmuje dwa argumenty - string i pozycję w tym stringu. Funkcja ma usunąć znak na pozycji ```pos``` i zwrócić string.

Przykład:
```JavaScript
removeChar("Koteczek", 0); // zwróci "oteczek"
removeChar("Koteczek", 3); // zwróci "Kotczek"
```
### Zadanie 6

Napisz funkcję ```removeDuplicates(string)```, która przyjmuje argument string i usuwa w nim wszystkie powtarzające się znaki.

Przykład:
```JavaScript
removeDuplicates("Kotttteczek") // zwróci "Koteczek"
removeDuplicates("Kotttteczczczczek") // zwróci "Koteczek"
removeDuplicates("Koteczek") // zwróci "Koteczek"
```

### Zadanie 7

Napisz funkcje ```getNegativeNumbers(array)```, która jako argument przyjmuje tablicę. Tablica może zawierać liczby ujemne. Funkcja **ma zwrócić** nową tablicę wypełnioną tylko ujemnymi liczbami. Jeśli nie ma liczb ujemnych, funkcja powinna zwrócić odpowiednią informację.

Przykład:
```JavaScript
var arr1 = [4, -5, 0, 2, -67, 8, 10, -34 ];
console.log(getNegativeNumbers(arr1));
Wynik w consoli: [-5, -67, -34]
```

### Zadanie 8
Napisz funkcję ```forEach(array, function)```, która dla każdego elementu tablicy wykona przekazaną funkcję, np:

```JavaScript
forEach([2,4,5,6], function(element) {
    console.log(“Element tablicy” + element);
});
// Wypisze na ekran po kolei linie: “Element tablicy: 2”, “Element tablicy: 4” itd.
```

### Zadanie 9
Napisz funkcję ```map(array, function)```, która zwróci nowa tablicę, ktorej elementy po kolei beda wynikiem wykonania przekazanej funkcji na kolejnych argumentach, np.
```JavaScript
map([1,3,5,7], function(element) {
    return element - 1;
}); 
// zwroci [0,2,4,6]
```

### Zadanie 10
Napisz funkcję ```filter(array, function)```, która zwróci nową tablicę, zawierającą kolejne elementy starej tablicy, dla ktorych wywołanie function zwroci wartosc true, np.
```JavaScript
filter([1, 2, “trzy”, 4, “😏”], function(e) {
    return (e % 2) == 0;
});
// zwroci [2, 4]
```

### Zadanie 11
Łącząc poprzednie funkcje, napisz funkcję ```oddStrings(array)```, która zwróci tablicę  zawierając wszystkie nieparzyste liczby (zapisane w oryginalnej tablicy jako cyfra - zarówno 3 jak i "3", ale już nie "trzy") jako napisy, np.
```JavaScript
oddStrings(7, 4, “3”, 6, 3, “trzy”, 2) // zwroci [“7”, “3”, “3”]
```
