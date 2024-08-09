
import { Link } from 'react-router-dom';
import { FaPaw, FaHeart } from 'react-icons/fa';

const About = () => {



    return (
        <div className="w-full min-h-screen  py-10">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
                <p className="text-lg mb-4">
                    Welcome to our pet adoption website! We are dedicated to helping animals find their forever homes and supporting our local community in the process. Our mission is to connect loving families with pets in need, ensuring every animal gets a chance at a happy life.
                </p>
                <div className="mb-8 text-center">
                    <FaPaw size={50} className="text-teal-600 mx-auto" />
                    <h2 className="text-2xl font-semibold mt-4">Our Mission</h2>
                    <p className="text-lg mt-2">
                        We believe that every pet deserves a loving home. Our team is passionate about animal welfare and works tirelessly to provide resources, support, and adoption services for pets in our community. Whether you are looking to adopt a new furry friend or just want to learn more about pet care, we are here to help.
                    </p>
                </div>
                <div className="mb-8 text-center">
                    <FaHeart size={50} className="text-pink-600 mx-auto" />
                    <h2 className="text-2xl font-semibold mt-4">Get Involved</h2>
                    <p className="text-lg mt-2">
                        There are many ways you can get involved and support our mission. From volunteering at our adoption events to donating to our organization, every little bit helps us make a difference in the lives of animals. Reach out to us to learn more about how you can contribute.
                    </p>
                </div>
                <div className="text-center">
                    <Link to="/" className="text-teal-600 hover:underline text-lg">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
