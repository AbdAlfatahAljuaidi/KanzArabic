import React, { useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;

const Form = () => {

  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    Brief: "",
    contentType: "",
    Package: "Professional",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("test");
    e.preventDefault();

    try {
      const res = await axios.post(`${apiUrl}/api/send`, formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "حدث خطأ أثناء الإرسال");
    }
  };

  return (
   <section dir="rtl" className="py-16 px-6 bg-gray-50">
  <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-md">
    <h2 className="text-3xl font-bold mb-6 text-center text-customRed">نموذج التواصل</h2>

    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-2 font-semibold text-customRed">الاسم الكامل*</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="اكتب اسمك الكامل"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-customRed">رقم الهاتف*</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="اكتب رقم هاتفك"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-customRed">البريد الإلكتروني*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="اكتب بريدك الإلكتروني"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-customRed">نوع النشاط التجاري*</label>
        <input
          type="text"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          placeholder="اكتب نوع نشاطك التجاري"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-customRed">نبذة مختصرة*</label>
        <textarea
          name="Brief"
          value={formData.Brief}
          onChange={handleChange}
          placeholder="اكتب نبذة عن عملك أو احتياجاتك من المحتوى"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={4}
        ></textarea>
      </div>

      <div>
        <label className="block mb-2 font-semibold text-customRed">نوع المحتوى المطلوب*</label>
        <input
          type="text"
          name="contentType"
          value={formData.contentType}
          onChange={handleChange}
          placeholder="نوع المحتوى (مثل: فيديو، صورة...)"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-customRed">الباقة*</label>
        <select
          name="Package"
          value={formData.Package}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Professional">الباقة الاحترافية</option>
        </select>
      </div>

      <div className="text-customRed text-sm">
        بتعبئة هذا النموذج، فإنك توافق على الشروط والأحكام الخاصة بوكالة KRE8
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
      >
        إرسال
      </button>

      {message && (
        <p className="text-center text-green-600 font-semibold mt-4">{message}</p>
      )}
    </form>
  </div>
</section>

  );
};

export default Form;
