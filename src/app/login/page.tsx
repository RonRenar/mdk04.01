'use client'; 

import React, { useState } from 'react'; 
import { useRouter } from 'next/navigation';  // Для навигации между страницами 
import Button from '../components/Button';    // Компонент кнопки 
import InputField from '../components/InputField'; // Компонент для ввода 

const LoginPage = () => { 
    const [username, setUsername] = useState(''); // Состояние для логина пользователя 
    const [password, setPassword] = useState(''); // Состояние для пароля 
    const router = useRouter(); // Хук для работы с навигацией 

    // Функция для обработки входа в систему 
    const handleLogin = () => { 
        // Проверка, если введенные данные правильные 
        if (username === 'Admin' && password === 'pswrd') { 
            // Перенаправление на страницу /home при успешном входе 
            router.push('/home'); 
        } else { 
            // Показать ошибку, если данные неверные 
            alert('Неверный логин или пароль'); 
        } 
    }; 

    return ( 
        <div className="flex items-center justify-center min-h-screen bg-gray-50"> 
            {/* Основной контейнер для формы, выравнивание по центру */} 
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"> 
                {/* Заголовок формы */} 
                <div className="flex items-center justify-center mb-6"> 
                    <h1 className="text-3xl font-bold text-gray-900">Авторизация</h1>
                    <img src="/favicon.ico" alt="favicon" className="ml-2 h-8 w-8" /> {/* Изображение favicon */}
                </div> 
                <div className="space-y-6"> 
                    {/* Поле ввода для логина */} 
                    <InputField 
                        type="text" 
                        placeholder="Логин" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} // Обновление состояния при изменении 
                        bgColor="bg-gray-50" 
                        textColor="text-gray-900" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    /> 
                    {/* Поле ввода для пароля */} 
                    <InputField 
                        type="password" 
                        placeholder="Пароль" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} // Обновление состояния при изменении 
                        bgColor="bg-gray-50" 
                        textColor="text-gray-900" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    /> 
                    {/* Кнопка для отправки формы */} 
                    <Button 
                        onClick={handleLogin}  // Обработчик нажатия на кнопку 
                        bgColor="bg-blue-600 hover:bg-blue-700" 
                        textColor="text-white" 
                        text="Войти" 
                        className="w-full px-4 py-2 rounded-lg transition-colors duration-200" 
                    /> 
                </div> 
            </div> 
        </div> 
    ); 
}; 

export default LoginPage;
