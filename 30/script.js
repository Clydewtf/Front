const text = 'всеМ прИвЕт, прИяТно ПоЗНакоМиТьсЯ!';

// Замена заглавных букв на строчные, с учетом первой заглавной буквы первого слова
const normalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

// Замена слова "привет" на "пока"
const replacedText = normalizedText.replace('привет', 'пока');

console.log('Исходная строка:', text);
console.log('Обработанная строка:', replacedText);
console.log('Количество символов:', replacedText.length);
console.log('Последний символ:', replacedText.charAt(replacedText.length - 1));