import React from "react";

const About = () => {
  return (
    <div id="about" >
    <section className="flex flex-col md:flex-row items-center justify-center mt-56 px-10 md:mt-72">
      <div className="max-w-7xl w-full rounded-3xl overflow-hidden md:flex flex-col md:flex-row-reverse">
        
        {/* الصورة - تميل باتجاه النص */}
        <div className="relative md:w-1/2 w-full md:flex justify-center items-center hidden perspective">
          <img
            src="https://res.cloudinary.com/danvxvhvq/image/upload/v1762528283/About_whtim4.jpg"
            alt="حولنا"
            className="w-[95%] h-[450px] object-cover absolute right-[12%] transform -rotate-y-6 transition-transform duration-700"
          />
        </div>
  
        {/* النص */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-10 md:perspective bg-amber-50 text-right">
          <h1 className="text-5xl font-bold mb-6 transform rotate-y-6 transition-transform duration-700 text-customRed">
            من نحن
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 transform rotate-y-6 transition-transform duration-700">
            مقرّنا في الأردن، ونسعى لتمكين الشركات المحلية من خلال ربطها بمحتوى فريد ومتنوع وعالي الجودة.
            نحن متخصصون في إدارة حسابات التواصل الاجتماعي، وإنتاج المحتوى الإبداعي، ومتابعة الحملات الإعلانية
            لمساعدة المشاريع الصغيرة والمتوسطة على بناء حضور رقمي فعّال ومميز.
          </p>
          <button className="bg-customRed text-white font-semibold ml-auto text-lg px-8 py-3 rounded-full w-fit transform rotate-y-6 transition-all duration-500 hover:bg-white hover:text-customRed hover:border hover:border-customRed">
            اقرأ المزيد
          </button>
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default About;
