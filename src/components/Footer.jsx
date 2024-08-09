import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold t">Pet Listing</h2>
                        <p className="mt-2 text-gray-400 ">
                            Connecting pets with loving homes. © 2024
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                        <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
                        <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
                        <Link to="/view-pets" className="text-gray-400 hover:text-white">View Pets</Link>
                    </div>

                    <a href="https://github.com/Rakesh-99" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaGithub size={20} />
                    </a>

                    <a href="https://www.linkedin.com/in/rakesh-kumar-parida-b142081a9/" target="_blank" className="text-gray-400 hover:text-white">
                        <FaLinkedin size={20} />
                    </a>

                    <a href="https://x.com/kumar_pari23020" target="_blank" className="text-gray-400 hover:text-white">
                        <FaTwitter size={20} />
                    </a>

                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" target="_blank" className="text-gray-400 hover:text-white">
                            <FaFacebook size={20} />
                        </a>

                        <a href="#" target="_blank" className="text-gray-400 hover:text-white">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
