import React from "react";
import {Link} from 'react-router-dom'

const PricingSection = () => {
  return (
    <section id="pricing" dir="rtl" className="py-16 px-6 bg-gray-50">
    {/* عنوان القسم */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-2">الأسعار</h2>
      <p className="text-gray-600">اختر الباقة التي تناسب احتياجاتك</p>
    </div>
  
    {/* بطاقة الباقة الواحدة */}
    <div className="m-5 mx-auto">
      <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
        <h3 className="text-3xl font-bold text-customRed mb-4">الباقة الاحترافية</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          تتضمن الباقة الاحترافية 8 فيديوهات شهريًا (فيديوهان أسبوعيًا)،
          مع أفكار رائجة وقصص إبداعية فريدة مصممة خصيصًا لتناسب احتياجات العميل.
          كما تشمل 5 منشورات شهريًا (منشور واحد وريلين أسبوعيًا)،
          بالإضافة إلى تصميم محتوى مخصص، وتغطية إعلانية شاملة، وجميع الخدمات الأخرى.
        </p>
  
        <ul className="text-gray-700 mb-8 space-y-3 text-right">
          <li>✅ 8 فيديوهات شهريًا (2 أسبوعيًا)</li>
          <li>✅ 5 منشورات شهريًا (منشور + 2 ريل أسبوعيًا)</li>
          <li>✅ أفكار رائجة وقصص إبداعية فريدة</li>
          <li>✅ تصميم محتوى مخصص وتغطية إعلانية شاملة</li>
          <li>✅ تشمل جميع الخدمات</li>
        </ul>
  
        <Link to={"/Form"}>
          <button className="bg-customRed text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:border hover:text-customRed hover:border-customRed transition">
            ابدأ الآن
          </button>
        </Link>
      </div>
    </div>
  </section>
  
  );
};

export default PricingSection;
