// Создание переменных
const firstName = 'Иван';
const lastName = 'Иванов';
const patronymic = 'Иванович';
const birthYear = 2000;
const direction = 'Прикладная информатика';

// Конкатенация строк с использованием оператора плюс
const result1 =
  'Имя: ' + firstName + '\n' +
  'Фамилия: ' + lastName + '\n' +
  'Отчество: ' + patronymic + '\n' +
  'Год рождения: ' + birthYear + '\n' +
  'Направление в институте: ' + direction;

// Конкатенация строк с использованием бэктиков
const result2 = `
Имя: ${firstName}
Фамилия: ${lastName}
Отчество: ${patronymic}
Год рождения: ${birthYear}
Направление в институте: ${direction}
`;

console.log('Способ 1 (оператор +):');
console.log(result1);

console.log('\nСпособ 2 (бэктики):');
console.log(result2);