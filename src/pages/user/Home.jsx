import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import video from '../../images/video.mp4'
import { HashLink } from "react-router-hash-link";
import HouseFullTime from "../../images/HouseFullTime.png";
import Clock from "../../images/Clock.png";
import peoples from "../../images/peoples.png";
 

const Home = () => {
  const [selectedServicesType, setSelectedServicesType] = useState('');
  const navigate = useNavigate();
  const handleServicesTypeSelection = (ServicesType) => {
    setSelectedServicesType(ServicesType);
    navigate(`/restaurants/${ServicesType}`);
  };
  return (
    <>

      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={video}
            type="video/mp4"
            autoPlay={true}
            muted={true}
            loop={true}
          />
        </div>
        <div className="video-content space-y-2 z-10 pb-5" style={{ height: "55vh" }}>
          <h1 className="font-bold text-5xl uppercase text-cyan-700">
            نبحث دائما عن أفضل طرق توفير الراحة لأنفسنا و لأحبائنا</h1>
          <h3 className="font-bold text-2xl capitalize" > استمتع في الراحة المثالية  مع  عاملات متدربين تدريباعاليا و جديرين بالثقة
          </h3>
          <div class="rounded-md ">
            <HashLink smooth={true} to="#Services">
              <button class="bg-cyan-700 hover:shadow-lg-[#009a9a] hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded">
                اختر العاملة التي تريدها
              </button>
            </HashLink>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />

      <section >
        <div className="text-center ">
          <h3 className="text-3xl sm:text-4xl uppercase leading-normal font-extrabold tracking-tight text-gray-900">
            من نحن و ما الذي يميزنا عن غيرنا ؟
          </h3>
        </div>
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div class="relative z-10 lg:py-16">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://img.freepik.com/free-photo/joyful-young-female-cleaner-wearing-uniform-bandana-rubber-gloves-looking-camera-showing-empty-hand-making-call-gesture-isolated-blue-background_141793-139759.jpg?w=1060&t=st=1688041545~exp=1688042145~hmac=7bbed58c81a8d78e5939687d6b6cd8e15431446f56f4a9d18d25caac20fd969a"
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-gray-200">
              <span
                class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-200"
              ></span>

              <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-2xl font-bold sm:text-3xl">
                  - عاملاتي هي وجهتكم الاولى التي يمكن الاعتماد عليها و  الحصول على الدعم المنزلي من خدمات التنظيف من خلال عاملات متدربين
                  تدريباعاليا و جديرين بالثقة

                </h2>

                <p class="mt-4 text-gray-600">
                  نبحث دائما عن أفضل طرق توفير الراحة لأنفسنا و لأحبائنا ; وهنا ما تقدمه
                  لكم عاملاتي ,اكتشفوا مجموعة من الخدمات المتوفرة خصيصا لراحتكم من خدمات التنظيف والتدبير المنزلي , تأكدوا من حصولكم على
                  المساعدة و لدعم دائما مهما كان ما تبحثون عنه احصلوا على خدمة عالية الجودة عاملات متدربين تدريباعاليا و جديرين بالثقة فإن
                  عاملات المنزل التي توفرها لكم عاملاتي يقدمن لكم الراحة و بما يناسبكم وعلى طريقتكم احصلوا على المساعدة التي تحتاجونها
                  في جميع الأعمال المنزلية على يد عاملات نظافة مؤهلات على أعلى مستوى لتنظيف المنزل احصلوا على جميع الخدمات المنزلية
                  التي تحتاجونها من التدبير المنزلي أو أي نوع من أنواع التنظيف العميق للمنزل استمتعوا بخدمة تنظيف المنزل بأسعار معقولة </p>

                <Link
                  to="/ContactUs"
                  class="mt-8 inline-block rounded border   bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none  "
                  style={{ backgroundColor: "#009a9a" }}
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto m py-12 mb-4">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 m-5">
            <h2
              data-aos="fade-up"
              className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            >
              خدمات عاملاتي
            </h2>
            <br />
          </div>
          <div className="grid gap-8 row-gap-10 lg:grid-cols-3">
            <div
              data-aos="fade-up-right"
              className="max-w-md sm:mx-auto sm:text-center rounded-tl-full rounded-tr-full rounded-br-full rounded-r shadow-xl p-3 border border-gray"
            >
              <div className="flex items-center justify-center w-16 h-16  rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                <img src={HouseFullTime} alt="" />
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                {" "}
                خدمات مقيمة
              </h6>
              <p className="mb-3 text-sm text-gray-900 p-4">
                اعتمد على خدمات مقيمة لراحتك  ، نقدم لكم خدمة عاملات مقيمات مدربات ومؤهلات على أعلى مستوى لتقديم أفضل خدمة هناك الكثير من
                 العائلات التي تهتم بتوظيف عاملات منزليات بالشهر وذلك لما توفره هذه الخدمة من وقت وجهد في البحث كل مرة عن عاملة نظافة بالساعة
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="max-w-md sm:mx-auto sm:text-center rounded-tl-full rounded-tr-full rounded-br-full rounded-r shadow-xl p-3 border border-gray"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                <img src={Clock} alt="" />
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                خدمات بالساعة
              </h6>
              <p className="mb-3 text-sm text-gray-900 p-4">
                احصلوا على الراحة بالساعة في جميع الأوقات , كيف تكونون أكثر راحة بينما يظل المنزل  نظيفا ومرتبا طوال الوقت؟! هذه هي عاملاتي،
                 تهتم بتفاصيل منزلكم لتنعموا بالراحة طوال الوقت وتقضوا الأوقات السعيدة مع من تحبون مععاملات بالساعة مدربات وذوات خبرات 
                 عالية
              </p>
            </div>
            <div
              data-aos="fade-up-left"
              className="max-w-md sm:mx-auto sm:text-center rounded-tl-full rounded-tr-full rounded-br-full rounded-r shadow-xl p-3 border border-gray"
            >
              <div className="flex items-center justify-center w-16 h-16  rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                <img src={peoples} alt="" />
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                خدمات بالمناسبات
              </h6>
              <p className="mb-3 text-sm text-gray-900 p-4">
                هل تستعدون لإقامة مناسبة خاصة؟ نوفر لكم عاملات ضيافة ذوات كفاءة عالية يتمكن من تلبية احتياجات ضيوفكم لإقامة
                حفل ناجح ورائع. حيث يمكنهم القيام بالكثير من أعمال الضيافة بما في ذلك خدمات تقديم الطعام وتنظيف المكان وغير ذلك الكثير
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <br />
        <br />
        <br />
        <section id="Services">
          <br />
          <h2 className=" text-4xl mb-8 tracking-tight font-extrabold text-black  text-center capitalize">
            العاملات التي توفرها عاملاتي
          </h2>
          <br />
          <br />
          <div className="flex flex-wrap mb-10 mx-20">
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://img.freepik.com/free-photo/woman-with-long-wavy-hair-wearing-apron-rubber-gloves-pointing-with-finger-bottle-with-cleaning-supplies-smiling-friendly-standing_141793-19158.jpg?w=1060&t=st=1688028993~exp=1688029593~hmac=179b21f25c4f94699e23c06f2988460e68c73c1b0f796aeaf2040c87111bc9f0"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      العاملات الفلبينيات
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleServicesTypeSelection("العاملات الفلبينيات")}
                    >
                      مشاهدة المزيد
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://img.freepik.com/free-photo/housewife-hold-up-with-bright-bottle-green-rubber_176420-8367.jpg?w=1060&t=st=1687989332~exp=1687989932~hmac=0a3d650d25154ed477f84f17530dcc407517dc45fb3d8885c1fb4365006573ad"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      العاملات الإندونيسيات
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleServicesTypeSelection("العاملات الإندونيسيات")}                                                                                                                      
                    >
                      مشاهدة المزيد
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://img.freepik.com/free-photo/young-beautiful-girl-apron-rubber-gloves-holding-basin-with-cleaning-tools-cleaning-spray-smiling-confident_141793-46083.jpg?w=1060&t=st=1687989181~exp=1687989781~hmac=7cf754f730a03c19aa3b8e0057d096b49219a00bc18b43079a324ae00d32e8b1"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      العاملات البريطانيات
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleServicesTypeSelection("العاملات البريطانيات")}
                    >
                      مشاهدة المزيد
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://img.freepik.com/free-photo/amazed-young-pretty-girl-washes-windows-with-blue-towel_176420-8409.jpg?w=1060&t=st=1687988772~exp=1687989372~hmac=8398b0456b44e1f67a1a862a585e9192d396a7f900077eaf52f9157077d72629"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      العاملات الهنديات
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleServicesTypeSelection("العاملات الهنديات")}
                    >
                      مشاهدة المزيد
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://img.freepik.com/free-photo/young-beautiful-girl-apron-rubber-gloves-holding-sponges-looking-uncertain-confused-having-no-answer_141793-28405.jpg?w=1060&t=st=1687989122~exp=1687989722~hmac=04a9b8087e5eda59b860286e9a6ccc97c1602d987e252eec1c47ea7220cbc3d8"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      العاملات الصينيات
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleServicesTypeSelection("العاملات الصينيات")}
                    >
                      مشاهدة المزيد
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://img.freepik.com/free-photo/young-beautiful-girl-apron-rubber-gloves-holding-cleaning-supplies-smiling-pointing-with-index-finger-it_141793-28457.jpg?w=1060&t=st=1687988932~exp=1687989532~hmac=56230be1a9e7922486b6ef844aaef2950b4deb67fc20758993fadde9b9b7b4ee"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      العاملات الباكستانيات
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleServicesTypeSelection(" العاملات الباكستانيات")}
                    >
                      مشاهدة المزيد
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <div className="flex justify-center">
          <HashLink smooth={true} to="ServicePageAll#">
            <Button className="border mb-10 border-solid border-cyan-700 border-2 text-cyan-700 hover:bg-cyan-700 hover:text-[#ffffff]" variant="text">
              عرض جميع العاملات
            </Button>
          </HashLink>
        </div>
      </div>

    </>
  )
}

export default Home