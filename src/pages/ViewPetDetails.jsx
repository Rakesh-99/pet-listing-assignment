import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
const API_KEY = import.meta.env.VITE_PETS_API_KEY;
import { BiCategoryAlt } from "react-icons/bi";
import { TiLocationOutline } from "react-icons/ti";
import { TbBuildingEstate } from "react-icons/tb";
import { TiPuzzleOutline } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { getPetsPending, getPetsSuccess, getPetsFailure } from '../redux/slice/petsSlice';
import Spinner from '../components/spinner/Spinner';


console.log(API_KEY);
const ViewPetDetails = () => {

    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.theme);
    const { isLoading, error } = useSelector((state) => state.pets);



    const { id } = useParams()
    const [petDetails, setPetDetails] = useState([]);
    const [selectImage, setSelectImage] = useState([]);







    useEffect(() => {
        const getPetDetails = async () => {

            try {
                dispatch(getPetsPending());
                const getPetById = await axios.get(`${API_KEY}?id=${id}`);
                if (getPetById) {
                    const response = getPetById?.data?.pets;
                    if (response) {
                        setPetDetails(response)
                        console.log(response);
                        dispatch(getPetsSuccess(response));
                        setSelectImage(response ? response[0].images[0] : [])
                    }

                }
            } catch (error) {
                dispatch(getPetsFailure(error.message));
                return false;
            }
        }
        getPetDetails();
    }, [id, dispatch])


    const imageClick = (value) => {
        setSelectImage([value])
    }


    return (
        <>
            <div className="min-h-screen flex justify-center items-center">

                {
                    // If the loader is true 
                    isLoading ?
                        <div className="flex items-center justify-center">
                            <Spinner />
                        </div>

                        :
                        <div className="">

                            <div className="min-h-screen flex-col md:flex-row flex">

                                {/* left content  */}
                                <div className={`border-r shadow-2xl ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300 '}`}>
                                    {
                                        petDetails && petDetails[0]?.images.length > 0 ?

                                            <div className="flex justify-center px-5 gap-4">
                                                {
                                                    petDetails[0]?.images.map((images, i) => {
                                                        return (
                                                            <div className="cursor-pointer my-3 hover:animate-pulse hover:scale-95 transition-all" key={i} >
                                                                <img src={images} alt="" className='w-24 rounded-md' onClick={() => imageClick(images)} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            :
                                            <div className="">
                                                <p>No images found!</p>
                                            </div>
                                    }

                                    {/* Large Image  */}
                                    <div className="flex justify-center px-5 flex-col items-center my-3">
                                        {
                                            <img src={selectImage} alt="" className={`md:w-[400px] border-2 px-2 py-2 rounded-md object-cover ${theme === 'dark' ? 'border-zinc-700' : 'border-gray-100'} `} />
                                        }
                                        <div className="text-center">
                                            {
                                                petDetails.map((val, i) => {
                                                    return (
                                                        <div className="my-2" key={i}>
                                                            <h1 className={`text-2xl md:text-5xl font-bold ${theme === 'dark' ? 'text-teal-400' : 'text-teal-800'}`}>I`m {val.name}</h1>

                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                </div>


                                {/* Right content  */}

                                {
                                    petDetails &&

                                    <div className="p-10">
                                        {
                                            petDetails.map((val, i) => {

                                                return (

                                                    <div className=" min-h-screen" key={i}>

                                                        <div className="flex flex-wrap md:flex-row flex-col  gap-5">
                                                            <div className={`flex gap-1 rounded-tl-md py-1 px-2 rounded-br-md  items-center ${theme === 'dark' ? 'bg-teal-600' : 'bg-teal-700 text-white '}`}>
                                                                <span><BiCategoryAlt size={20} /></span>
                                                                <span className='text-sm'>Breed - {val.breed}</span>
                                                            </div>


                                                            <div className={`flex  rounded-tl-md py-1 px-2 rounded-br-md  items-center ${theme === 'dark' ? 'bg-teal-600' : 'bg-teal-700 text-white '}`}>
                                                                <span><TiPuzzleOutline size={20} /></span>
                                                                <span className='text-sm'>Animal - {val.animal}</span>
                                                            </div>

                                                            <div className={`flex rounded-tl-md py-1 px-2 rounded-br-md      items-center ${theme === 'dark' ? 'bg-teal-600' : 'bg-teal-700 text-white '}`}>
                                                                <span><TbBuildingEstate size={20} /></span>
                                                                <span className='text-sm'>State - {val.state}</span>
                                                            </div>

                                                            <div className={`flex gap-1 rounded-tl-md py-1 px-2 rounded-br-md  items-center ${theme === 'dark' ? 'bg-teal-600' : 'bg-teal-700 text-white '}`}>
                                                                <span><TiLocationOutline size={20} /></span>
                                                                <span className='text-sm'>Location -  {val.city}</span>
                                                            </div>

                                                        </div>


                                                        <div className="md:w-[600px]  my-10">
                                                            <h1 className='text-xl md:text-4xl font-semibold my-5'>About Me : </h1>
                                                            <p>{val.description}</p>
                                                        </div>
                                                    </div>
                                                )

                                            })
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                }
            </div >
        </>
    )
}

export default ViewPetDetails