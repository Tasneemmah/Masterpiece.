import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import axios from  'axios';
import Swal from 'sweetalert2'

const RestaurantHome = () => {


  const [restaurant, setRestaurant] = useState([]);
  const [ res, setRes] = useState([])

  useEffect(() => {

      axios.get('http://localhost:5000/generatedRes')
      .then((response) => {
        setRestaurant(response.data);
                let x =response.data[0].restaurant_id;

             
              axios.get(`http://localhost:5000/restaurant/${x}`)
              .then((response) => {
                setRes(response.data);
                console.log(response.data)
              })
              .catch((error) => console.log(error.message));
          

      })
      .catch((error) => console.log(error.message));






  }, []);
 // //////////////////////////////////////////
 const [img, setImg] = useState("");
 const onChange = e => {
   const files = e.target.files;
   const file = files[0];
   getBase64(file);
   console.log(img);
 };
 const onLoad = fileString => {

   setImg(fileString);
 };
 const getBase64 = file => {
   let reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = () => {
     onLoad(reader.result);
   };
 };

  const [table_number, setTable_number] = useState("");
  const [available_time_start, setAvailable_time_start] = useState("");
  const [guest_number, setGuest_number] = useState("");
  const [available_time_end, setAvailable_time_end] = useState("");

  const [error, setError] = useState("");
  const restaurant_id  = restaurant[0]?.restaurant_id;

  const handleSubmit = (event) => {
    event.preventDefault();
    let done = true;
    const table = {table_number, available_time_start, guest_number, available_time_end, img, table_status: "available", restaurant_id};

    if(table_number === "")
    {
      setError("**Please add the number of table.");
      done = false;
    }
   else if(available_time_start === "")
    {
      setError("**Please add Opening time.");
      done = false;
    }
   else if(available_time_end === "")
    {
      setError("**Please add Closing time.");
      done = false;
    }
   else if(guest_number === "")
    {
      setError("**Please add Guests number.");
      done = false;
    }
    else if (img === "")
    {
      setError("**Please add Table Image.");
      done = false;
    }
          
      if(done){    
        
        axios.post('http://localhost:5000/table', table)
              .then(function (response) {
                if(response.data === "رقم العاملة مأخوذ بالفعل!")
                setError(response.data);

                else {Swal.fire({
                  position: "center",
                  icon: "success",
                  title:
                    "تمت إضافة عاملة بنجاح",
                });}
                // window.location.reload(false);
              
              })
              .catch(function (error) {
                console.log(error);
              });
          }
  };
  return (
    <>
  
  
      <div
        className="bg-cover bg-center h-screen shadow"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/impressed-young-female-cleaner-wearing-uniform-bandana-rubber-gloves-standing-profile-view-holding-toilet-brushes-stretching-sponge-out-looking-camera-pretend-cleaning_141793-134480.jpg?w=1060&t=st=1688132145~exp=1688132745~hmac=eea7566823026a70aedbe5d6412bb2b36b1380fdd4f18ef090cedf414cb3e073")',
          height: "400px",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">

            <nav className="text-white mb-8">
              <ol className="list-none p-0 inline-flex">
               
              <div
            className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
            style={{
              marginTop: 350,
              // backgroundColor: "hsla(0, 0%, 100%, 0.9)",
              backdropFilter: "saturate(200%) blur(25px)",
            }}
          >
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            مرحبا بك ، أفضل اختيار لعملك<br />
              <span className="text-cyan-600">لتقديم الخدمات التي توفرها</span>
            </h1>
            <Link
              smooth="true"
              to={`/profile/${restaurant_id}`}
              className="bg-cyan-700 hover:shadow-lg-[#009a9a] hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="#!"
              role="button"
            >
              الملف الشخصي
            </Link>
          </div>
              </ol>
            </nav>
          </div>
        </div>
      </div>

 { (res[0]?.restaurant_name != "") && <>
 <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
 
 
  





        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                زيادة عملائك :
              <span className="text-cyan-600"> اضافة عاملات</span>
            </h1>
            <h2 className="mt-6 text-lg leading-8 text-cyan-600">
            أضف خدماتك واجعل الناس يأتون إليك
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <HashLink
                smooth="true"
                to="#service"
                className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
              إضافة خدمة
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              </HashLink>
            </div>
                </div>
                
                <center>          <div className="md:5/12 lg:w-6/12">
                    <img
                        src="https://img.freepik.com/free-photo/cheerful-young-female-cleaner-wearing-uniform-bandana-rubber-gloves-holding-brush-cleanser-crossed-looking-camera-laughing-isolated-blue-background_141793-140482.jpg?w=1060&t=st=1688132077~exp=1688132677~hmac=99e17881e8e43c90910d6eda27291e3bee9877b6bc149cfd76e2de3feccf62ed"
                        alt="image"
                        loading="lazy"
                     
                    />
                </div></center>

            </div>
        </section>





      <span id="service"></span>
      <div className="min-h-screen bg-cyan-950 py-6 flex flex-col justify-center sm:py-12 mt-20">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="text-white relative px-4 py-10 bg-cyan-900 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl uppercase font-bold">إضافة خدمة !</h1>
              <p className="text-black font-bold">املأ النموذج</p>
            </div>
            <form onSubmit={handleSubmit}>
              <label className="text-black font-bold mb-2" htmlFor="table_num">
              رقم العاملة
              </label>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder=" رقم العاملة"
                name="table_num"
                value={table_number}
                onChange={(e) => {setTable_number(e.target.value)
                setError("")}}
              />

              <label className="text-black font-bold mb-2" htmlFor="time_start">
                من الساعة 
              </label>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="time"
                placeholder=""
                name="time_start"
                value={available_time_start}
                onChange={(e) => {setAvailable_time_start(e.target.value)
                  setError("")}}
              />
              <label className="text-black font-bold mb-2" htmlFor="time_end">
               الى الساعة
              </label>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="time"
                placeholder=""
                name="time_end"
                value={available_time_end}
                onChange={(e) => {setAvailable_time_end(e.target.value)
                  setError("")}}
              />
              <label className="text-black font-bold mb-2" htmlFor="guest_num">
                عدد العاملات
              </label>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder=" عدد العاملات"
                name="guest_num"
                value={guest_number}
                onChange={(e) => {setGuest_number(e.target.value)
                  setError("")}}
              />
              <label className="text-black font-bold mb-2" htmlFor="guest_num">
                صورة العاملة
              </label>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                placeholder="Table Image"
                name="guest_num"
                onChange={(e) => {onChange(e)
                  setError("")}}
                  accept="image/*"

              />
              
              
                {error && <p className='text-amber-100'>{error}</p>}
              <div className="flex justify-between">
                <input
                  className="shadow bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  defaultValue="Send ➤"
                />
                <input
                  className="bg-cyan-700 hover:shadow-lg-[#009a9a] hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"
                  type="reset"
                  onClick={() => {
                    setTable_number("");
                    setAvailable_time_end("");
                    setAvailable_time_start("");
                    setGuest_number("");
                    setImg("");
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
 
 
 </>
 } 
 
 </>
  );
  
};

export default RestaurantHome;
