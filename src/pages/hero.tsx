import React from 'react';
import Button from '../components/Button';
import '../styles/hero.css';

export default function Hero() {
    return (
        <section id="hero" className="py-lg">
            <div className="container content">
                <p className="desktop-only">
                    Bem-vindo à Agency Pro
                </p>
                <h1>Soluções tecnológicas inovadoras para o seu negócio!</h1>
                <p>
                    Na Agency Pro, desenvolvemos soluções digitais sob medida, utilizando as tecnologias mais avançadas para garantir a inovação e o sucesso do seu empreendimento.
                </p>
                <div className="flex gap-1">
                    <span><Button text="Entre em contato" /></span>
                    {/* <span className="desktop-only">
                        <Button text="Conheça nossos serviços" secondary />
                    </span> */}
                </div>
            </div>
        </section>
    );
}
