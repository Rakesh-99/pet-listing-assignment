
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaInfoCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';






const Home = () => {

    const { theme } = useSelector((state) => state.theme);


    return (
        <div className="min-h-screen ">
            <header className="bg-teal-800  py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-white">Welcome to Pet Listing</h1>
                    <p className="mt-4 text-lg text-white">
                        Discover and adopt your next furry friend. Browse through our listings and find the perfect pet for you!
                    </p>
                    <div className="mt-6">
                        <Link
                            to="/view-pets"
                            className="bg-gradient-to-r text-white from-purple-400 to-pink-600  py-2 px-6 rounded-sm text-lg font-semibold shadow-md hover:opacity-90"
                        >
                            View Pets
                        </Link>
                    </div>
                </div>
            </header>

            <main className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold">Why Adopt from Us?</h2>
                        <p className={`mt-4 text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`} >
                            We connect you with loving pets in need of a home. Our pets are well-cared for and ready to be a part of your family.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="border shadow-lg rounded-lg p-6 text-center">
                            <FaSearch size={40} className="text-teal-800 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Browse Pets</h3>
                            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                                Use our search tools to find the perfect pet by breed, location, and more.
                            </p>
                        </div>

                        <div className="border shadow-lg rounded-lg p-6 text-center">
                            <FaHeart size={40} className="text-teal-800 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Adopt a Pet</h3>
                            <p className={` ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                                Give a pet a forever home and make a difference in their life.
                            </p>
                        </div>

                        <div className="border shadow-lg rounded-lg p-6 text-center">
                            <FaInfoCircle size={40} className="text-teal-800 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Learn More</h3>
                            <p className={` ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                                Find out more about our mission and how we help pets find their new homes.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className='text-white'>© 2024 Pet Listing. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
