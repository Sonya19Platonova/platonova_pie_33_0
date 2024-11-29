function getTextBoxValue() {
    let resultContainer = document.getElementById("resultContainer1");
    let inputValue = document.getElementById("myTextBox1").value;
    let num = inputValue.split(' ').map(Number);

    let summa = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            summa += num[i];
        }
        if (num[i] == 0) {
            break;
        }
    }
    resultContainer.textContent = summa;
    document.getElementById("myTextBox1").value = "";
}
