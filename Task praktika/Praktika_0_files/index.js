const fs = require('fs');
const path = require('path');
const inputFile = '../input.txt';
const outputFile = '../output.txt';

//Чтение файла
const contentFromFile = fs.readFileSync(path.join(__dirname, inputFile), 'utf8');

// Задание 1
const words = contentFromFile.split(' ');
const filterWords = words.filter(word => word.length >= 7);
const result = filterWords.join(' ');

fs.writeFileSync(path.join(__dirname, outputFile), result);
console.log('Задание 1 = "' + result + '"');
console.log('Filtered words saved to output.txt');

// Задание 2
const words1 = contentFromFile.split('/n');
const result1 = words1.join('/n');

fs.writeFileSync(path.join(__dirname, outputFile + '2'), result1);
console.log('Задание 2 = "' + result1 + '"');
console.log('Filtered words saved to output2.txt');