import React from 'react';


interface ButtonProps {
    onClick: () => void; // Клик на кнопку
    bgColor: string; // Цвет фона 
    textColor: string; // Цвет текста 
    text: string; // Текст
    className?: string; // Кастомка
}

const Button: React.FC<ButtonProps> = ({
                                           onClick,
                                           bgColor,
                                           textColor,
                                           text,
                                           className,
                                       }) => {
    return (
        <button
            onClick={onClick} // Запуск OnClick
            className={`transition-transform duration-200 ease-in-out transform hover:scale-105 ${bgColor} ${textColor} ${className}`}
            //Применение всех параметров
        >
            {text} {/* Отображаем текст*/}
        </button>
    );
};

export default Button;