function formatDate(dateString: string) {
  // Преобразуем строку в объект Date
  const date = new Date(dateString);

  // Получаем год, месяц и день
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Добавляем 1, потому что месяцы начинаются с 0
  const day = String(date.getDate()).padStart(2, '0');

  // Возвращаем форматированную строку
  return `${year}-${month}-${day}`;
}

// Пример использования
const originalDateString = "2024-06-28T11:25:16.960+00:00";
const formattedDate = formatDate(originalDateString);
console.log(formattedDate); // Вывод: 2024-06-28
