let a = 2.1;
let b = 0.7;
let x = prompt("Введите значение X из следующего списка: -2, 0, 1: ");     // ввод значения Х 
let y;

x = parseFloat(x);         // преобразование строки "x" в число для дальнейших операций

if(isNaN(x) || ((x != -2) && (x != 0) && (x != 1))) {     // проверка, является ли введенное значение числом (NaN - Not a Number)
    alert("Введите корректные значения целых чисел!");
} else {
    switch (x) {
        case 1:
            y = Math.floor(Math.sqrt(1 + (Math.E**(a * x))));
            alert("Значение функции y = √(1 + e^(a*x)) = " + y + ", при x = " + x + "; при условии x > 0, " + x + " > 0");
            break;

        case 0:
            y = Math.floor(1 / (1 + a * Math.abs(x)));
            alert("Значение функции y = 1 / (1 + a * |x| = " + y + ", при x = " + x + "; при условии -2 < x <= 0, -2 <" + x + " <= 0");
            break;
            
        case -2:    
            y = Math.floor(Math.cos(b * (x**2)) + 0.5 * x);
            alert("Значение функции y = cos(b * (x^2)) + 0.5 * x = " + y + ", при x = " + x + "; при условии x <= -2, " + x + " <= -2");
            break;
            
    } 
}


        
