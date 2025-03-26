import React from 'react';

interface InputFieldProps {
    type: string; // Тип поля ввода
    placeholder: string; // Текст-подсказка, который будет отображаться в поле ввода, когда оно пустое
    value: string; // Значение, которое отображается в поле ввода
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Функция обратного вызова для изменения значения поля
    bgColor: string; // Цвет фона поля ввода
    textColor: string; // Цвет текста в поле ввода
    className?: string; // Дополнительные классы для кастомизации компонента (необязательный)
}

const InputField: React.FC<InputFieldProps> = ({
                                                   type,
                                                   placeholder,
                                                   value,
                                                   onChange,
                                                   bgColor,
                                                   textColor,
                                                   className,
                                               }) => {
    return (
        <input
            type={type} // Тип поля (например, текстовое поле, поле для пароля и т.д.)
            placeholder={placeholder} // Подсказка для пользователя, когда поле пустое
            value={value} // Значение, которое отображается в поле ввода
            onChange={onChange} // Обработчик изменения значения в поле ввода
            className={`${bgColor} ${textColor} ${className} transition-transform duration-200 ease-in-out transform hover:scale-105`} // Применяем переданные классы и добавляем эффекты перехода и изменения масштаба при наведении
        />
    );
};

export default InputField;