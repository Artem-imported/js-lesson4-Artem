document.getElementById('checkFieldsBtn').addEventListener('click', function() {
  const field1 = document.getElementById('field1').value;
  const field2 = document.getElementById('field2').value;
  const message = field1 && field2 ? "Обидва поля заповнені" : "Не всі поля заповнені";
  document.getElementById('message').innerText = message;
});

document.getElementById('checkSumBtn').addEventListener('click', function() {
  const num1 = parseFloat(document.getElementById('num1').value) || 0;
  const num2 = parseFloat(document.getElementById('num2').value) || 0;
  const sumMessage = (num1 + num2) > 10 ? "Сума більша за 10" : "Сума менша або дорівнює 10";
  document.getElementById('sumMessage').innerText = sumMessage;
});

document.getElementById('checkTextBtn').addEventListener('click', function() {
  const text = document.getElementById('textField').value;
  const wordMessage = text.includes("JavaScript") ? "Текст містить слово JavaScript" : "Текст не містить слово JavaScript";
  document.getElementById('wordMessage').innerText = wordMessage;
});

document.getElementById('checkRangeBtn').addEventListener('click', function() {
  const number = parseFloat(document.getElementById('numberField').value);
  const rangeMessage = (number > 10 && number < 20) ? "Число входить в діапазон від 10 до 20" : "Число не входить в діапазон від 10 до 20";
  document.getElementById('rangeMessage').innerText = rangeMessage;
});

document.getElementById('validateFormBtn').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (name.length >= 3 && email.includes('@') && email.includes('.', email.indexOf('@')) && password.length >= 6) {
    document.getElementById('formMessage').innerText = "Перенаправлення на іншу сторінку...";
    setTimeout(() => {
      window.location.href = "https://example.com";
    }, 2000);
  } else {
    document.getElementById('formMessage').innerText = "Помилка в заповненні форми!";
  }
});