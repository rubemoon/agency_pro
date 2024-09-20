import '../styles/pricing.css';

export default function Pricing() {
    return (
        <div className="pricing-section">
            <div className="pricing-title">
                <h1>Preços</h1>
                <p>Independentemente do seu status, nossas ofertas evoluem de acordo com suas necessidades.</p>
            </div>
        
            <div className="pricing-cards">
                
                <div className="pricing-card popular">
                    <span className="popular-tag">Mais popular</span>
                    <h4>Iniciante</h4>
                    <p className="price">R$39</p>
                    <p>Todos os recursos básicos para iniciar um novo negócio</p>
                    <ul>
                        <li>2 usuários</li>
                        <li>Recursos do plano</li>
                        <li>Suporte ao produto</li>
                    </ul>
                    <a href="#" className="sign-up-btn">Saiba Mais</a>
                </div>
        
                <div className="pricing-card">
                    <h4>Equipe</h4>
                    <p className="price">R$89</p>
                    <p>Tudo o que você precisa para um negócio em crescimento</p>
                    <ul>
                        <li>5 usuários</li>
                        <li>Recursos do plano</li>
                        <li>Suporte ao produto</li>
                    </ul>
                    <a href="#" className="sign-up-btn">Saiba Mais</a>
                </div>
        
                <div className="pricing-card">
                    <h4>Empresarial</h4>
                    <p className="price">R$149</p>
                    <p>Recursos avançados para escalar seu negócio</p>
                    <ul>
                        <li>10 usuários</li>
                        <li>Recursos do plano</li>
                        <li>Suporte ao produto</li>
                    </ul>
                    <a href="#" className="sign-up-btn">Saiba Mais</a>
                </div>
            </div>
        </div>
    );
}