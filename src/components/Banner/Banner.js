import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <header className="banner-container">
            <nav className="navbar">
                <div className="logo">
                    <section className='Circle'></section>
                    StaffControl
                </div>
                <ul className="nav-links">
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/equipes">Equipes</a></li>
                    <li><a href="/relatorios">Relatórios</a></li>
                </ul>
            </nav>
            <main className="banner-main">
                <h1 className="banner-title">
                    Controle e <span className="highlight">Eficiência</span> para Sua Equipe
                </h1>
                <div className="smoke smoke1"></div>
                <div className="smoke smoke2"></div>
                <div className="smoke smoke3"></div>
            </main>
        </header>
    );
}

export default Banner;