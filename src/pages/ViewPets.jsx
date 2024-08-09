import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_PETS_API_KEY;
import { getPetsPending, getPetsSuccess, getPetsFailure } from "../redux/slice/petsSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/spinner/Spinner";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { MdErrorOutline } from "react-icons/md";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";



const ViewPets = () => {


    const dispatch = useDispatch();
    const { isLoading, error, pets = [] } = useSelector((state) => state.pets);
    const { theme } = useSelector((state) => state.theme);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPets] = useState(63);
    const postPerPage = 10;
    const totalPages = Math.floor(totalPets / postPerPage);

    const [formData, setFormData] = useState({
        breed: '',
        animal: '',
        location: ''
    })




    // Fetching pets Info :

    useEffect(() => {
        const getPetsData = async () => {
            try {
                dispatch(getPetsPending());
                const getData = await axios.get(`${API_KEY}?page=${currentPage}`);

                if (getData.data) {
                    const response = getData.data.pets;
                    dispatch(getPetsSuccess(response))

                }
            } catch (error) {
                dispatch(getPetsFailure(error.message));
                toast.error(error.message)
                return false;
            }
        };
        getPetsData();
    }, [dispatch, currentPage]);




    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    const previousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }


    // Tracking all the input fileds 
    const inputChangeHandle = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }



    // Here I am using set to remove the duplicate values : 
    const uniqueBreeds = pets ? [...new Set(pets.map(pet => pet.breed))] : [];
    const uniqueAnimals = pets ? [...new Set(pets.map(pet => pet.animal))] : [];
    const uniqueLocations = pets ? [...new Set(pets.map(pet => pet.city))] : [];



    const submitHandle = (e) => {
        e.preventDefault();

        const URL = new URLSearchParams(location.search);

        URL.set('animal', formData?.animal)
        URL.set('breed', formData?.breed)
        URL.set('location', formData?.location)

        const textUrl = URL.toString();

        // console.log(textUrl);


        const getFilteredData = async () => {

            try {
                dispatch(getPetsPending());
                const info = await axios.get(`${API_KEY}?${textUrl}`);

                if (info) {
                    const getPetsResult = info.data.pets;
                    dispatch(getPetsSuccess(getPetsResult))
                }
            } catch (error) {
                console.log(error.message);
                dispatch(getPetsFailure(error.message))
            }
        }
        getFilteredData();
    }



    return (
        <>
            <div className="w-full min-h-screen">

                {/* Search  */}
                <div className="flex flex-col items-center gap-5 my-5 justify-center ">

                    <h1 className={`text-center md:text-5xl text-2xl   text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600`}>Search Pets</h1>

                    <form className="flex gap-5  flex-col md:flex-row items-center relative my-5" onSubmit={submitHandle}>

                        {/* Search by breed  */}
                        <div className="flex flex-col">

                            <label className="my-1 text-sm font-thin text-gray-400">Search by Breed</label>
                            <select
                                name="breed"
                                className={`border transition-all py-1 px-3 rounded-sm ${theme === 'dark' ? 'bg-zinc-600 text-white' : 'bg-gray-100 text-black'}`} onChange={inputChangeHandle}
                                defaultValue='Select Breed'
                            >
                                <option disabled>Select breed</option>
                                {uniqueBreeds.map((value, i) => {

                                    return (
                                        <option value={value} key={i}>{value}</option>
                                    )
                                })}
                            </select>
                        </div>

                        {/* Search by animal  */}
                        <div className="flex flex-col">
                            <label className="my-1 text-sm font-thin text-gray-400">Search by animal</label>
                            <select
                                name="animal"
                                className={`border transition-all py-1 px-3 rounded-sm ${theme === 'dark' ? 'bg-zinc-600 text-white' : 'bg-gray-100 text-black'}`} onChange={inputChangeHandle}
                                defaultValue='Select animal'
                            >
                                <option disabled >Select animal</option>
                                {uniqueAnimals.map((value, i) => {
                                    return (
                                        <option value={value} key={i}>{value}</option>
                                    )
                                })}
                            </select>
                        </div>

                        {/* Search by location  */}
                        <div className="flex flex-col">
                            <label className="my-1 text-sm font-thin text-gray-400">Search by location</label>
                            <select
                                name="location"
                                className={`border transition-all py-1 px-3 rounded-sm ${theme === 'dark' ? 'bg-zinc-600 text-white' : 'bg-gray-100 text-black'}`} onChange={inputChangeHandle}
                                defaultValue='Select location'
                            >
                                <option disabled>Select location</option>
                                {uniqueLocations.map((value, i) => {
                                    return (
                                        <option value={value} key={i}>{value}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="flex mt-7 items-center justify-center">
                            <button
                                type="submit"
                                className="font-semibold   py-2 text-sm rounded-r-md bg-gradient-to-r from-purple-400 to-pink-600 border-none px-5 active:scale-95 transition-all">
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                {
                    error
                        ?
                        // If there is any error show this :  
                        <div className="flex justify-center items-center">
                            <div className="text-red-600 bg-red-200 py-1 px-5 rounded-bl-full rounded-tr-full gap-3 flex items-center justify-center">
                                <MdErrorOutline size={35} />
                                <p className="font-bold">{error}</p>
                            </div>
                        </div>

                        // if there is no error procced showing pets list
                        : <div className="text-center">
                            {isLoading ? (
                                <div className="my-20">
                                    <Spinner />
                                </div>
                            ) : (
                                <div className="">
                                    {pets && pets.length > 0 ? (
                                        <div className="flex flex-wrap transition-all gap-5 justify-center items-center">
                                            {pets.map((value) => {
                                                return (
                                                    <NavLink to={`/pet-details/${value.id}`} key={value.id}>
                                                        <div className={`border hover:animate-pulse hover:translate-y-1 shadow-lg transition-all cursor-pointer  px-2 py-2 rounded-md ${theme === 'dark' ? 'border-teal-900' : 'border-gray-300'}`}>

                                                            <div className="">
                                                                <img src={value.images[0]} alt="" className="w-60 rounded-md  transition-all" />
                                                            </div>
                                                            <div className="flex items-center py-3 justify-around">
                                                                <span className="text-xs bg-teal-800 rounded-sm px-2 py-1 font-semibold text-white">Animal : {value.animal}</span>

                                                                <span className="text-xs bg-teal-800 rounded-sm px-2 py-1 font-semibold text-white">Breed : {value.breed}</span>
                                                            </div>

                                                            <div className="flex gap-2 justify-center">
                                                                <p className="font-semibold">Name:</p>
                                                                <p>{value.name}</p>
                                                            </div>

                                                            <div className={`border hover:bg-teal-700 transition-all hover:text-white  rounded-sm py-1 my-1 border-teal-500`}>
                                                                <button className="text-sm">Read more..</button>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <div className="flex justify-center">
                                            <div className="w-72 bg-red-500 py-1 gap-1 rounded-sm text-white flex justify-center items-center">
                                                <MdErrorOutline size={25} />
                                                <p>No pets found !</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                }


                {/* Pagination Buttons */}
                {
                    pets && pets.length > 9 ?


                        <div className="flex justify-center gap-5 transition-all my-10">

                            {/* Previous Button  */}
                            <div className="flex justify-center">
                                <button onClick={() => previousPage()} disabled={currentPage === 0} className={`active:scale-95 transition-all active:bg-teal-900 text-white flex items-center text-sm font-semibold gap-1 bg-teal-800 w-28 justify-center rounded-sm py-2 ${currentPage === 0 && 'bg-zinc-700 text-red-400 cursor-not-allowed active:bg-zinc-600'}`}>
                                    <GrFormPreviousLink size={22} />
                                    <p>Previous</p>
                                </button>
                            </div>

                            {/* Next Button  */}
                            <div className="flex justify-center">
                                <button onClick={() => nextPage()} disabled={currentPage === totalPages} className={`text-white active:scale-95 transition-all active:bg-teal-900 flex items-center text-sm font-semibold gap-1 bg-teal-800 w-28 justify-center rounded-sm py-2 ${currentPage === totalPages && 'bg-zinc-700 text-red-400 cursor-not-allowed active:bg-zinc-600'}`}>
                                    <p>Next</p>
                                    <GrFormNextLink size={22} />
                                </button>
                            </div>


                        </div>

                        :

                        <div className="flex justify-center my-10 ">
                            <NavLink to={`/`} className={` flex items-center text-center text-white bg-teal-800 active:bg-teal-900 rounded-sm py-2 px-3 text-sm font-semibold`}>
                                <GrFormPreviousLink size={25} />
                                <p>Home</p>
                            </NavLink >
                        </div>
                }
            </div >
        </>
    );
};

export default ViewPets;
