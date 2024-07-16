import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="w-screen bg-[#004AAD] text-gray-300 lg:py-12 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
                <div className="footer-section">
                    <h2 className="text-lg font-semibold mb-2">Sobre</h2>
                    <p>Saiba mais sobre nós e sobre o produto!</p>
                </div>
                <div className="footer-section">
                    <h2 className="text-lg font-semibold mb-2">Contato</h2>
                    <p>Aprenda com nosso curso interativo em English 4u!</p>
                </div>

                <div className="footer-section">
                    <h2 className="text-lg font-semibold mb-2">Links Úteis</h2>
                    <ul>
                        <li><a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidade</a></li>
                        <li><a href="#" className="hover:text-gray-400 transition-colors">Termos de Serviço</a></li>
                    </ul>
                </div>
                <div className="footer-section flex justify-center lg:justify-start">
                    <h2 className="text-lg font-semibold mb-2">Redes Sociais</h2>
                    <div className="flex space-x-4 ml-4">
                        <a href="#" className="hover:text-gray-400 transition-colors">
                            <FontAwesomeIcon icon={faFacebook} className="w-8 h-8" />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-colors">
                            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-colors">
                            <FontAwesomeIcon icon={faYoutube} className="w-8 h-8" />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-colors">
                            <FontAwesomeIcon icon={faTiktok} className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-8 text-center">
                <p className="text-sm opacity-50">&copy; 2024 Nome da Empresa. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
