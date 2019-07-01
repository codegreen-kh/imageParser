import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
    return (
        <div className="footer">
            <div className="logo">
            </div>
            <div className="footer-text">
                <span>Если вы хотите, чтобы ваше приложение появилось в нашем маркетплейсе, обращайтесь</span>
                <a href="mailto:info@cobrain.io">info@cobrain.io</a>
            </div>
            <a href="#">Контакты</a>
        </div>
    );
}