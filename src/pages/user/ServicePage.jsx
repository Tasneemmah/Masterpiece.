import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaUtensils, FaMapMarkerAlt, FaBook } from 'react-icons/fa'


function ServicePage({ setCurrentTable }) {
  const [restaurants, setRestaurants] = useState([]);
  const { type_food } = useParams();


  // Get all the restaurants based on its food type 
  useEffect(() => {
    axios
      .get(`http://localhost:5000/restaurants/${type_food}`)
      .then((response) => {
        console.log(response.data);
        setRestaurants(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  }, [type_food]);


  // This is for the filter "filter the restaurants based on its location"
  const [yourSelectedStateValueAddress, setOptionAddress] = useState("");

  const [searchTermUsers, setSearchTermUsers] = useState("");

  const [currentPageUsers, setCurrentPageUsers] = useState(1);

  useEffect(() => {
    const totalItemsUsers = restaurants.length;
    const totalPagesUsers = Math.ceil(totalItemsUsers / itemsPerPage);
    setCurrentPageUsers(1);
  }, [restaurants]);


  // The gah=genation of the page
  const itemsPerPage = 6;
  const startIndexUsers = (currentPageUsers - 1) * itemsPerPage;
  const endIndexUsers = startIndexUsers + itemsPerPage;

  const handlePageChangeUsers = (event, pageNumber) => {
    setCurrentPageUsers(pageNumber);
  };

  const [selectedResId, setSelectedResId] = useState("");
  const navigate = useNavigate();


  // Go to the details of each restaurant by id 
  function handleRes(restaurant) {
    let restaurant_id = restaurant.restaurant_id;
    setSelectedResId(restaurant_id);
    navigate(`/Details/${restaurant_id}`);

  }


  // Handle the restaurants tables 
  function handleTable(element) {
    setCurrentTable(element)

  }



  return (
    <>

<div
        className="bg-cover bg-center h-screen shadow"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/young-beautiful-girl-apron-rubber-gloves-making-heart-gesture-with-fingers-chest-smiling_141793-28409.jpg?w=1060&t=st=1687995661~exp=1687996261~hmac=599228e1960362c131d9b41de76295e6d7f5ee4cae2804d563d038ebf76c78a5")',
          height: "400px", marginBottom: "50px"
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">عاملاتي</h1>

            <nav className="text-white mb-8">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="text-cyan-700">
                    الرئيسية
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
                <li>عاملاتي</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>



      <div className="flex justify-center mt-5 mb-5">
        <div className="w-full md:w-10/12 shadow shadow-black p-5 rounded-lg bg-white border-solid border-2  transform transition duration-300 ">
          <div className="flex justify-between items-center">
            <label className="text-lg font-medium mr-2">البحث عن عاملة حسب العنوان</label>
            <select
              className="px-4 py-3 w-48 md:w-60 rounded-md bg-gray-100 border-cyan-500 border-2 focus:border-cyan-600 focus:bg-white focus:ring-0 text-sm appearance-none"
              value={yourSelectedStateValueAddress}
              onChange={(e) => setOptionAddress(e.target.value)}
            >
              <option value="">جميع العناوين</option>
              <option value="Amman">عمان</option>
              <option value="Zarqa">الزرقاء</option>
              <option value="Balqa">البلقاء</option>
              <option value="Madaba">مأدبا</option>
              <option value="Karak">الكرك</option>
              <option value="Tafilah">الطفيلة</option>
              <option value="Ma'an">معان</option>
              <option value="Aqaba">العقبة</option>
              <option value="Mafraq">المفرق</option>
              <option value="Jerash">جرش</option>
              <option value="Ajloun">عجلون</option>
              <option value="Irbid">اربد</option>
            </select>
          </div>
        </div>
      </div>



      <div className="flex flex-wrap gap-10 justify-center my-16">
        {restaurants
          .filter(
            (restaurant) =>
              restaurant.address.toLocaleLowerCase() === yourSelectedStateValueAddress.toLocaleLowerCase() ||
              yourSelectedStateValueAddress.toLocaleLowerCase() === ""
          )
          .slice(startIndexUsers, endIndexUsers)
          .map((restaurant, index) => (
            <div
              key={index}
              className="flex flex-col shadow-lg rounded-lg overflow-hidden h-[fit-content] w-[fit-content] bg-white p-4 transform transition duration-300 hover:scale-105"
              style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
            >
              <img 
                src={restaurant.img}
                alt={restaurant.restaurant_name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <strong>  <h2 className="text-lg font-large font-bold text-gray-800">
                  {restaurant.restaurant_name}
                </h2></strong>
                <p className="text-gray-500 mt-4 mb-3 flex items-center w-96">
                  <FaBook className="mr-2" />
                  {restaurant.des}
                </p>

                <p className="text-gray-500 mt-4 flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  {restaurant.address}
                </p>
                <p className="text-gray-500 mt-2 flex items-center">
                  <FaUtensils className="mr-2" />
                 جنسية العاملة: <span className="capitalize"> {restaurant.type_food}</span>
                </p>
                <div className="mt-5">
                  <button onClick={() => { handleRes(restaurant) }} className="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded">
                    عرض التفاصيل
                  </button>
                </div>
                <div className="mt-2" />
              </div>
            </div>
          ))}
      </div>


      { restaurants.length >=6  && <div className="flex justify-center mb-5 bg-[#f8f8f8]">
        <Pagination
          count={Math.ceil(restaurants.length / itemsPerPage)}
          page={currentPageUsers}
          onChange={handlePageChangeUsers}
          color="primary"
          size="large"
        />
      </div>}
    </>
  );
};

export default ServicePage;
