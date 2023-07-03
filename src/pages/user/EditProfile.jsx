import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const EditProfile = () => {

 

  const [user, setUser] = useState({})
  const [id, setId] = useState({})


  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [PhoneNumber, setPhoneNumber] = useState("")
  const [Password, setPassword] = useState("")

  useEffect(() => {
      axios.get('http://localhost:5000/recordpId')
      .then((response) => {
  
        setUser(response.data[0])
        setId(response.data[0].userid)

        setUsername(response.data[0].username)
        setEmail(response.data[0].email)
        setPhoneNumber(response.data[0].phone_number)
        setPassword(response.data[0].password)




      })
      .catch((error) => console.log(error.message))
 

  }, []

  )





  console.log(id)
  console.log(user)




  function handleSubmit(event) {
    event.preventDefault();

    axios.put(`http://localhost:5000/user/${id}`, {
      username, email, phone_number: PhoneNumber, password: Password
    })
      .then(function (response) {
        console.log(response.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title:
            "تم تحديث التفاصيل الخاصة بك بنجاح",
        });


      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-200 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto ">
          <div >
            <h2 className="font-semibold text-xl text-black-900">تعديل الملف الشخصي</h2>
            <br />
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                {
                  user.length !== 0 &&
                  <form onSubmit={handleSubmit} className="lg:col-span-2">

                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label htmlFor="full_name">الاسم الكامل</label>
                          <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            className="border-cyan-500 border-2 focus:border-cyan-600 placeholder-700 dark:placeholder-500 focus:border-cyan-600 bg-white text-sm rounded-lg block w-full p-2.5 cyan:bg-gray-700 focus:outline-none"
                            defaultValue=""
                            placeholder='الاسم'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                          />
                        </div>
                        <br />
                        <div className="md:col-span-5">
                          <label htmlFor="email">عنوان البريد الإلكتروني</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="border-cyan-500 border-2 focus:border-cyan-600 placeholder-700 dark:placeholder-500 focus:border-cyan-600 bg-white text-sm rounded-lg block w-full p-2.5 cyan:bg-gray-700 focus:outline-none"
                            defaultValue=""
                            placeholder="email@domain.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                          />
                        </div>
                        <br />
                        <div className="md:col-span-5">
                          <label htmlFor="phone_number">رقم الهاتف</label>
                          <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            className="border-cyan-500 border-2 focus:border-cyan-600 placeholder-700 dark:placeholder-500 focus:border-cyan-600 bg-white text-sm rounded-lg block w-full p-2.5 cyan:bg-gray-700 focus:outline-none"
                            defaultValue=""
                            placeholder="07XXXXXXXX"
                            value={PhoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                          />
                        </div>
                        <br />
                        <div className="md:col-span-5">
                          <label htmlFor="password">كلمة السر</label>
                          <input
                            type="password"
                            name="password"
                            id="passwoord"
                            className="border-cyan-500 border-2 focus:border-cyan-600 placeholder-700 dark:placeholder-500 focus:border-cyan-600 bg-white text-sm rounded-lg block w-full p-2.5 cyan:bg-gray-700 focus:outline-none"
                            defaultValue=""
                            placeholder="*******"
                            value={Password}
                            onChange={(event) => setPassword(event.target.value)}
                          />
                        </div>






                        <div className="md:col-span-5 text-right">
                          <div className="inline-flex items-end">
                            <br />
                            <br />
                            <br />
                            <button type='submit' className="bg-cyan-700 hover:shadow-lg-[#009a9a] hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded">
                              حفظ 
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </form>
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    </>)
}

export default EditProfile