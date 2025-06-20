function Homepage(){

  return (
    <>
    <h1>Homepage</h1>

    <header>

       <h1 class="logo">WTF Site</h1>

        <nav class="nav">
            <a href="main_page.html">Конвертеры</a>
            <a href="service">Факт дня</a>
            <a href="content">Контент</a>
            <a href="about">О нас</a>
        </nav>

        <div class="log">
            <a class="login" href="entry_with_userid">Войти</a>
            <a class="signup" href="quick_register.html">Регистрация</a>
        </div>

    </header>
    </>
  )
} 

export default Homepage

import React from 'react';
import './homepage.css';