let original_number = prompt("Введите трехзначное число: ");     // ввод трехзначного числа (результат сохраняется как строка)

original_number = parseFloat(original_number)                      // преобразование строки "number" в число для дальнейших математических операций

let hundred = Math.floor(original_number / 100)            // деление исходного числа на 100 без остатка (первая цифра)
let ten = Math.floor((original_number % 100) / 10)         // деление остатка от деления исходного числа на 100 на 10 без остатка (вторая цифра)
let unit = Math.floor (original_number % 10)               // остаток от деления исходного числа на 10 (третья цифра)

let final_nubmer = 100 * unit + 10 * ten + hundred                        // вычисление периметра "P" прямоугольного треугольника

alert("Число, полученное при прочтении исходного числа справа налево: " + original_number + " = " + final_nubmer)    // вывод числа, полученное при прочтении исходного числа справа налево.
