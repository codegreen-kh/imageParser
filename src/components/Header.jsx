import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

export function Header() {
    return (
        <div className="header">
            <div className="logo">
            </div>
            <div className="menu">
                <ul className="menu--items-list">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Анализ флюорограмм</a></li>
                </ul>
            </div>
            <div className="user-section">
            <FontAwesomeIcon icon={faUser} />
            <button className="logout">Выход</button>
            </div>
        </div>
    );
}