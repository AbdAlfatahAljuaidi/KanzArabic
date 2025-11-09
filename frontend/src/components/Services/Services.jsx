import React from "react";
import { FaUsers, FaBullhorn, FaPenFancy, FaChartLine, FaCamera, FaVideo } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaUsers className="text-4xl text-customRed mb-3" />,
      title: "إدارة وسائل التواصل الاجتماعي",
      description: "إدارة تعليقات الستوري، الرد على الرسائل، وتحليل أداء الحساب بشكل شهري ودقيق.",
    },
    {
      icon: <FaPenFancy className="text-4xl text-customRed mb-3" />,
      title: "صناعة المحتوى",
      description: "كتابة التعليقات، الوسوم، الإشارات، وتصميم الريلز والفيديوهات بطريقة جذابة تحول أفكارك إلى محتوى مؤثر.",
    },
    {
      icon: <FaBullhorn className="text-4xl text-customRed mb-3" />,
      title: "الأنشطة التسويقية",
      description: "تصميم الشعار والهوية البصرية، إدارة الحملات الإعلانية، التصميم الجرافيكي، إنتاج الفيديوهات، والتعليق الصوتي.",
    },
    {
      icon: <FaChartLine className="text-4xl text-customRed mb-3" />,
      title: "إدارة الحساب والنمو",
      description: "إدارة يومية، مراقبة التفاعل، تحليل الأداء، ووضع استراتيجيات فعّالة لزيادة النمو.",
    },
    {
      icon: <FaVideo className="text-4xl text-customRed mb-3" />,
      title: "الإعلانات الممولة",
      description: "حملات ذكية تستهدف الجمهور المثالي، تشمل إنشاء الإعلانات وتتبع الأداء لتحقيق أفضل النتائج.",
    },
    {
      icon: <FaCamera className="text-4xl text-customRed mb-3" />,
      title: "التصوير والإنتاج الإعلامي",
      description: "تصوير احترافي، إعداد بوسترات، تصوير فيديوهات، ومحتوى بصري مخصص وفق احتياجات العميل.",
    },
  ];

  return (
    <section id="services" className="mt-36 md:mt-48 px-6">
      {/* العنوان الرئيسي */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4 text-customRed">خدماتنا</h1>
        <h3 className="text-lg text-gray-600">ابدأ معنا بثقة</h3>
      </div>

      {/* شبكة الخدمات */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <h1 className="text-center mx-auto w-fit">
              {service.icon}
            </h1>
            <h2 className="text-2xl font-semibold mb-3 text-customRed">
              {service.title}
            </h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
