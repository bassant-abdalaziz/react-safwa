import React from 'react'
import './style.css';


const About= ()=> {
  return (
  <div className="about" id="about">
    <div className="container">
      <div className='content'>
          <div className="about-information">
              <p className='head'>معلومات عنا</p>
              <h2 className='heading'>من نحن</h2>
              <p>
              أكاديمية الصفوة توفر لكم معلمين و معلمات متخصصين ذات خبرة طويلة في المناهج السعودية حضوري و اونلاين فى جميع المواد الدراسية, اضافة الى اخصائيين تخاطب و تربية خاصة.
              </p>

              <p>يمكنك التواصل معنا عبر الإتصال أو واتساب لمعرفة كافة التفاصيل وطلب المعلم المناسب.</p>
              <p>أكاديمية الصفوة : ثقة - أمانة - كفاءة</p>
          
          </div>

          <div className='image'>
            <img src='images/about.png' alt="about" />
          </div>
        </div> 
    </div>
</div>
  )
}

export default About