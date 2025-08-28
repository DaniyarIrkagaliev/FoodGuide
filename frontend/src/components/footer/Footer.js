import React from 'react';
import "./footer-styles.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-body ">
                <div className=" footer-elements container">

                    <a className="footer-element"
                       href='https://t.me/BRGD_Kazakh'
                       rel='nofollow'
                       target="_blank"
                    >
                        Обратная связь
                    </a>
                    <a className="footer-element"
                       href='/'
                    >
                        На главную
                    </a>
                    <a className="footer-element"
                       href="/about"
                       rel='nofollow'
                       target="_blank"
                    > Помощь</a>
                </div>

            </div>


            <div className="below-body">
                &copy; 2023 Daniyar Irkagaliev. Contact via {' '}
                <a
                    href='https://t.me/BRGD_Kazakh' rel='nofollow' target="_blank">
                    Telegram
                </a>
            </div>
        </div>
    );
};

export default Footer;