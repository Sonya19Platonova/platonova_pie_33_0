let A = prompt("Введите число A: ");     // ввод первого числа A 
let B = prompt("Введите число B: ");     // ввод первого числа B 
let C = prompt("Введите число C: ");     // ввод первого числа C 

A = parseFloat(A);         // преобразование строки "A" в число для дальнейших операций
B = parseFloat(B);         // преобразование строки "B" в число для дальнейших операций
C = parseFloat(C);         // преобразование строки "C" в число для дальнейших операций

if(isNaN(A)||isNaN(B)||isNaN(C)) {                 // проверка, является ли введенное значение числом (NaN - Not a Number)
    alert("Введите корректные значения целых чисел!");
} else {
    if ((A < B) && (A < C)) {
        alert("Наименьшее значение: А = " + A + ", среди чисел A = " + A + "; B = " + B + "; C = " + C + ".");
} else {
    if ((B < A) && (B < C)) {
        alert("Наименьшее значение: B = " + B + ", среди чисел A = " + A + "; B = " + B + "; C = " + C + ".");
} else {
        alert("Наименьшее значение: C = " + C + ", среди чисел A = " + A + "; B = " + B + "; C = " + C + ".");
        } 
    } 
}


