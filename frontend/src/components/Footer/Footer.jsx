import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // ← استيراد الأيقونات

const Footer = () => {
  return (
    <footer id="contact" dir="rtl" className="bg-gray-900 text-gray-300 py-10 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* قسم الشعار والمعلومات */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img
            src="https://res.cloudinary.com/danvxvhvq/image/upload/v1762228749/Logo_vntafp.png"
            alt="شعار كنز ميديا"
            className="w-12 h-12 rounded-full"
          />
          <h2 className="text-xl font-semibold text-white"> Kanz Media Agency</h2>
        </div>
        <p className="text-sm leading-relaxed">
          الرباعية - شارع الكندي - مجمع الكرادشة
        </p>
        <p className="mt-3">📞 +962 7 7075 9793</p>
        <p>✉️ Kanzmediaagncey@gmail.com</p>
      </div>
  
      {/* قسم الروابط السريعة */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">روابط سريعة</h3>
        <ul className="space-y-2">
          <li><a href="#about" className="hover:text-white transition">من نحن</a></li>
          <li><a href="#services" className="hover:text-white transition">خدماتنا</a></li>
          <li><a href="#pricing" className="hover:text-white transition">الأسعار</a></li>
          <li><a href="#contact" className="hover:text-white transition">تواصل معنا</a></li>
        </ul>
      </div>
  
      {/* قسم مواقع التواصل الاجتماعي */}
      <div>
        <h3 className="text-lg font-semibold text-white">تابعنا على</h3>
        <div className="flex flex-col gap-4 mt-3">
          <a
            target="_blank"
            href="https://www.facebook.com/share/17ZWr9NEkK/?mibextid=wwXIfr"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaFacebook className="text-blue-500" /> فيسبوك
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/kanz.media.agency?igsh=MXhzdW8ycTU3MWF3NA%3D%3D&utm_source=qr"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaInstagram className="text-pink-500" /> إنستغرام
          </a>
          {/* <a
            href="#"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaLinkedin className="text-blue-400" /> لينكدإن
          </a> */}
        </div>
      </div>
  
    </div>
  
    <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
      © {new Date().getFullYear()} وكالة كنز ميديا جميع الحقوق محفوظة
    </div>
  </footer>
  
  );
};

export default Footer;
