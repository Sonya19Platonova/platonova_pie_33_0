function getTextBoxValue2() {
    let resultContainer = document.getElementById("resultContainer2");
    let inputValue = document.getElementById("myTextBox2").value;
    let num = inputValue.split(' ').map(Number);

    let proizvedenie2 = 1;

    for (let i = 0; i < num.length; i++) { 
        proizvedenie2 *= num[i];
    } 
    resultContainer.textContent = proizvedenie2;
    document.getElementById("myTextBox2").value = "";
}
