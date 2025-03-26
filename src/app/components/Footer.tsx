import React from 'react'; 

// Определяем интерфейс для свойств компонента Footer 
// isDarkMode — это необязательный булевый параметр, указывающий на активацию темной темы 
interface FooterProps { 
    isDarkMode?: boolean; 
} 

// Создаем функциональный компонент Footer с использованием React 
// Пропс isDarkMode определяет стиль отображения футера 
const Footer: React.FC<FooterProps> = ({ isDarkMode }) => { 
    return ( 
        // Используем элемент <footer> для создания нижнего колонтитула 
        // Классы Tailwind CSS меняются в зависимости от значения isDarkMode 
        // Если isDarkMode = true, применяются классы для темного фона, иначе — для светлого 
        // Класс p-4 добавляет отступы вокруг содержимого футера 
        // Класс text-center выравнивает текст по центру 
        <footer className={`p-4 text-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'}`}>
            &copy; 2025 История НАТКа. Все права защищены.
        </footer>
    ); 
}; 

// Экспортируем компонент Footer для использования в других частях приложения 
export default Footer;