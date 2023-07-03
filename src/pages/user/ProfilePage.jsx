import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const ProfilePage = () => {

    const [id, setId] = useState()
    const [orders, setOrders] = useState([])
    const order_pending = false;
    const [prevOrders, setPrevOrders] = useState([])
    const [user, setUser] = useState([])

    // const { curruntUser,updateSetCurruntUser } = useContext(UserContext)


    useEffect(() => {

        axios.get('http://localhost:5000/getId')
            .then(function (response) {

                setId(response.data[0].userid)
                console.log(response.data[0].userid)

                let x = response.data[0].userid
                axios.get(`http://localhost:5000/user/${x}`)
                    .then(function (response) {
                        console.log(response.data);
                        setUser(response.data);

                        if (user.length !== 0) {
                            order_pending = true;
                        }

                    })
                    .catch(function (error) {
                        console.log(error);
                    });



                axios.get(`http://localhost:5000/userOrders/${response.data[0].userid}`)
                    .then(function (response) {
                        console.log(response.data);

                        setOrders(response.data);


                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                axios.get(`http://localhost:5000/oldOrders/${response.data[0].userid}`)
                    .then(function (response) {
                        console.log(response.data);

                        setPrevOrders(response.data);


                    })
                    .catch(function (error) {
                        console.log(error);
                    });






            })
            .catch(function (error) {
                console.log(error);
            });





    }, [prevOrders]

    )



    // Change the format of the Time.
    function formatTime(t) {

        if (!order_pending) {
            const timestamp = t;
            const time = timestamp.substring(0, 5); // Extract the time portion

            const date = new Date(`2000-01-01T${time}:00`);
            const formattedTime = date.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            });
            return formattedTime;

        }
    }

    // Change the format of the Date.
    function formatDate(d) {
        if (!order_pending) {
            const timestamp = d;
            const date = new Date(timestamp);
            const formattedDate = date.toLocaleDateString();
            return formattedDate;
        }
    }
    return (
        <>
            <div className="p-16 bg-white">
                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-cyan-500 uppercase">ملفي الشخصي</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-cyan-500"></span>
                </h1>
                <div className="p-8 bg-white shadow mt-4">
                    {" "}
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {" "}
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            {" "}

                        </div>{" "}
                        <div className="relative">
                            {" "}
                            <div className="w-48 h-48 bg-cyan-500 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <svg
                                    xmlns="https://source.unsplash.com/MP0IUfwrn0A"
                                    className="h-24 w-24"
                                    viewBox="0 0 20 20"
                                    fill="white"


                                >
                                    {" "}
                                    <path
                                        fillRule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clipRule="evenodd"
                                    />
                                </svg>{" "}
                            </div>{" "}
                        </div>{" "}
                        <br /> <br />
                    </div>
                    {user.length !== 0 &&

                        <div className="mt-20 text-center border-b pb-12">

                            <h1 className="text-4xl font-medium text-gray-700">
                                {user[0]?.username}
                            </h1>
                            <h3 className="font-light text-gray-600 mt-3">
                                {user[0]?.email}

                            </h3>
                            <h3 className="mt-1 text-gray-500">

                                {user[0]?.phone_number}

                            </h3>
                            <br />
                            <div className="space-x-8 flex justify-center mt-32 md:mt-0 md:justify-center">

                                <Link to="/EditProfile" className="bg-cyan-700 hover:shadow-lg-[#009a9a] hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded">
                                    تعديل الملف الشخصي
                                </Link>

                            </div>
                        </div>
                    }

                </div>
                <br />
                <br />
                <br />


                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-cyan-500 uppercase">الحجوزات الحالية</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-cyan-500"></span>
                </h1>
                <div className="p-8 bg-white shadow mt-4">
                    {" "}


                    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16  bg-white">

                        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 ">
                            {orders?.map((order) => {
                                if (order.status == "pending") return (
                                    <div className="rounded overflow-hidden shadow-lg">
                                        <div className="relative">
                                            <img
                                                className="w-full"
                                                src="https://img.freepik.com/free-photo/high-angle-hands-holding-resignation-note_23-2149480622.jpg?w=1060&t=st=1688053314~exp=1688053914~hmac=777763439e14b73c0f11508f063154ccdca3af7990607cf0f1d4910fb8a35f32"
                                                alt="Sunset in the mountains"
                                            />
                                            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

                                            <div className="absolute bottom-0 left-0 bg-cyan-600 px-4 py-2 text-white text-sm font-bold">
                                                {order.table_number}
                                            </div>

                                            <div className="text-sm absolute top-0 right-0 bg-cyan-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3">
                                                <span className="font-bold">الطلب</span>
                                                <small>
                                                    {order.orders_id}
                                                </small>
                                            </div>
                                        </div>
                                        <div className="bg-white">
                                            <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto">
                                                <li>
                                                    <div className="px-4 py-5 sm:px-6">
                                                        <div className="flex items-center justify-between">
                                                            <h3 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                                                                رقم العاملة
                                                            </h3>
                                                            <p className="mt-1 max-w-2xl text-medium text-black">
                                                                {order.table_number}

                                                            </p>
                                                        </div>
                                                        <div className="mt-4 flex items-center justify-between">
                                                            <p className="text-sm font-medium text-gray-500">
                                                                الحالة :
                                                                <span className="text-red-600">
                                                                    {order.status}

                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="mt-4 flex items-center justify-between">
                                                            <p className="text-sm font-medium text-gray-500">
                                                                تاريخ الطلب :                                                    <span className="text-black">
                                                                    {formatDate(order.order_date)}
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="mt-4 flex items-center justify-between">
                                                            <p className="text-sm font-medium text-gray-500">
                                                                وقت الطلب :
                                                                <span className="text-black">

                                                                    {formatTime(order.order_time)}

                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="mt-4 flex items-center justify-between">
                                                            {/* <p className="text-sm font-medium text-gray-500">
                                                                رقم العاملة :
                                                                <span className="text-black"> 3</span>
                                                            </p> */}
                                                            <button className="bg-cyan-700 hover:shadow-lg-[#009a9a] hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"
                                                                onClick={() => {
                                                                    Swal.fire({
                                                                        title: 'تأكيد',
                                                                        text: 'هل أنت متأكد من رغبتك في إلغاء حجزك؟',
                                                                        icon: 'question',
                                                                        showCancelButton: true,
                                                                        confirmButtonColor: 'cyan',
                                                                        confirmButtonText: 'أوك',
                                                                        cancelButtonColor: 'cyan',
                                                                        cancelButtonText: 'إلغاء الأمر',
                                                                    }).then((result) => {
                                                                        if (result.isConfirmed) {
                                                                            axios.delete(`http://localhost:5000/deleteOrders/${order.orders_id}`)
                                                                                .then(function (response) {
                                                                                    console.log(response.data);



                                                                                })
                                                                                .catch(function (error) {
                                                                                    console.log(error);
                                                                                });
                                                                            Swal.fire('نجاح!', 'تم إلغاء طلبك بنجاح!', 'success');

                                                                            setTimeout(function () {
                                                                                // window.location.reload();
                                                                            }, 2000);

                                                                        } else if (result.dismiss === Swal.DismissReason.cancel) {
                                                                            // User clicked Cancel or closed the modal
                                                                            Swal.fire('إالغاء', 'إالغاء.', 'error');
                                                                        }
                                                                    });
                                                                }}
                                                            >
                                                                إلغاء الأمر
                                                            </button>

                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-cyan-500 uppercase">الحجوزات السابقة</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-cyan-500"></span>
                </h1>
                <div className="p-8 bg-white shadow mt-4">
                    {" "}


                    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16  bg-white">

                        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 opacity-50">
                            {prevOrders?.map((order) => {
                                return (
                                    <div className="rounded overflow-hidden shadow-lg">
                                        <div className="relative">
                                            <img
                                                className="w-full"
                                                src="https://f.hubspotusercontent20.net/hubfs/3390327/WordPress-Table-Reservation-plugin-1000x562-1.jpg"
                                                alt="Sunset in the mountains"
                                            />
                                            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

                                            <div className="absolute bottom-0 left-0 bg-cyan-600 px-4 py-2 text-white text-sm font-bold">
                                                {order.table_number}
                                            </div>

                                            <div className="text-sm absolute top-0 right-0 bg-cyan-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3">
                                                <span className="font-bold">الطلب</span>
                                                <small>
                                                    {order.orders_id}
                                                </small>
                                            </div>
                                        </div>
                                        <div className="bg-white">
                                            <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto">
                                                <li>
                                                    <div className="px-4 py-5 sm:px-6">
                                                        <div className="flex items-center justify-between">
                                                            <h3 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                                                                عدد العاملات
                                                            </h3>
                                                            <p className="mt-1 max-w-2xl text-medium text-black">
                                                                {order.table_number}

                                                            </p>
                                                        </div>
                                                        <div className="mt-4 flex items-center justify-between">
                                                            <p className="text-sm font-medium text-gray-500">
                                                                الحالة :
                                                                <span className="text-green-600">
                                                                    {order.status}

                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="mt-4 flex items-center justify-between">
                                                            <p className="text-sm font-medium text-gray-500">
                                                                بيانات الطلب :
                                                                <span className="text-black">
                                                                    {formatDate(order.order_date)}
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="mt-4 flex items-center justify-between">
                                                            <p className="text-sm font-medium text-gray-500">
                                                                وقت الطلب :
                                                                <span className="text-black">

                                                                    {formatTime(order.order_time)}

                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="mt-4 flex items-center justify-between">
                                                            <p className="text-sm font-medium text-gray-500">
                                                                رقم الضيف :
                                                                <span className="text-black"> 3</span>
                                                            </p>


                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default ProfilePage