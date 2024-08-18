function checkLeapYear() {
    const year = document.getElementById('leapYearInput').value;
    let result;
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result = `${year} is a leap year.`;
    } else {
        result = `${year} is not a leap year.`;
    }
    document.getElementById('leapYearResult').innerText = result;
}

function getPrice() {
    const age = document.getElementById('ageInput').value;
    let price;
    if (age <= 12) {
        price = "$10";
    } else if (age >= 13 && age <= 17) {
        price = "$15";
    } else {
        price = "$20";
    }
    document.getElementById('priceResult').innerText = `Ticket Price: ${price}`;
}

function generateFibonacci() {
    const n = document.getElementById('fibonacciInput').value;
    const result = fibonacci(n);
    document.getElementById('fibonacciResult').innerText = `Fibonacci(${n}) = ${result}`;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function checkPalindrome() {
    const str = document.getElementById('palindromeInput').value;
    const result = isPalindrome(str) ? "is a palindrome." : "is not a palindrome.";
    document.getElementById('palindromeResult').innerText = `"${str}" ${result}`;
}

function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (str.length <= 1) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    } else {
        return false;
    }
}