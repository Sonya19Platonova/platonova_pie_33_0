function getTextBoxValue1() {
    let resultContainer = document.getElementById("resultContainer1");
    let inputValue = document.getElementById("myTextBox1").value;
    let coefficients = inputValue.split(' ').map(Number);

    if (coefficients.length !== 3) {
        resultContainer.textContent = "Пожалуйста, введите три коэффициента a, b и c.";
        return;
    }

    let a = coefficients[0];
    let b = coefficients[1];
    let c = coefficients[2];

    let numberOfRoots = f(a, b, c);
    resultContainer.textContent = numberOfRoots;

    // Очищаем текстовое поле
    document.getElementById("myTextBox1").value = "";
}

function f(a, b, c) {
    if (a === 0) {
        // Если a равно 0, это не квадратное уравнение
        if (b === 0) {
            if (c === 0) {
                return 'Бесконечно много решений'
            } else {
                return 'Нет решений'
            }

        } else {
            return 1
        }
    }

    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        return 2; // Два различных корня
    } else if (discriminant === 0) {
        return 1; // Один корень (двойной)
    } else {
        return 0; // Нет действительных корней
    }
}
