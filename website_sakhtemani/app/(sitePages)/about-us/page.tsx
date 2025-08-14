import React from 'react'
import './AboutUs.css';

const page = () => {
  return (
  
    <div className="about-container">
      <h1 className="titr">آشنایی بیشتر با ما</h1>
      <p className="description">گروه ساخت‌وساز آجر چین با بیش از ۳۰ سال سابقه حرفه‌ای و درخشان در صنعت ساختمان، یکی از برترین شرکت‌های عمرانی و ساختمانی در ایران است. این مجموعه با تکیه بر دانش فنی روز، بهره‌گیری از تکنولوژی‌های نوین ساخت و ساز و استفاده از مصالح مرغوب، پروژه‌های متعددی را در حوزه ساخت ساختمان‌های مسکونی، تجاری و صنعتی با کیفیت بسیار بالا و مطابق با استانداردهای بین‌المللی به انجام رسانده است.</p>
      <p className="description">تیم متخصص و متعهد آجر چین شامل مهندسین عمران، معماران باتجربه و نیروی اجرایی حرفه‌ای است که با همکاری نزدیک با کارفرمایان و مشاوره‌های دقیق، فرآیند ساخت را به‌صورت کاملاً حرفه‌ای و در زمان‌بندی مشخص مدیریت می‌کنند. این همکاری مستمر باعث شده تا رضایت صددرصدی مشتریان، یکی از اصلی‌ترین اهداف و دستاوردهای این گروه باشد.</p>
      <p className="description">ما در آجر چین معتقدیم ساخت و ساز تنها به معنای ایجاد سازه نیست؛ بلکه خلق فضایی امن، پایدار و زیبا برای زندگی و کسب‌وکار است. از طراحی اولیه تا تحویل نهایی، تمامی مراحل پروژه با دقت، برنامه‌ریزی و کنترل کیفیت انجام می‌شود تا تجربه‌ای بی‌نظیر برای مشتریان رقم بخورد.</p>
      <p className="description">اگر به دنبال یک شریک مطمئن در صنعت ساخت‌وساز با سابقه‌ای طولانی و عملکردی قابل اعتماد هستید، گروه آجر چین بهترین انتخاب برای تحقق پروژه‌های شما با کیفیت بالا و زمان تحویل دقیق است.</p>
      <div className="team-member-titr-contaner">
        <h2>اعضای گروه آجرچین</h2>
      </div>
      <div className="team-section">
        <div className="team-member">
          <img src="./aboutuspic/businessman.jpeg" alt="Member 1" className='persen-img'/>
          <h3>مجتبی گرامی</h3>
          <p>مدیر پروژه</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="./icon/call.svg" alt="svg call icon" className='icon'/></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="./icon/whatsup.svg" alt="svg of whatsup icon" className='icon'/></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="./icon/linkdin.svg" alt="svg of linkdin icon" className='icon'/></a>
          </div>
        </div>

        <div className="team-member">
          <img src="./aboutuspic/businessman.jpeg" alt="Member 2" className='persen-img'/>
          <h3>میلاد گرامی</h3>
          <p>معمار ارشد</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="./icon/call.svg" alt="svg call icon" className='icon'/></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="./icon/whatsup.svg" alt="svg of whatsup icon" className='icon'/></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="./icon/linkdin.svg" alt="svg of linkdin icon" className='icon'/></a>
          </div>
        </div>

        <div className="team-member">
          <img src="./aboutuspic/businessman.jpeg" alt="Member 3" className='persen-img'/>
          <h3>محمد علی گرامی</h3>
          <p>کارشناس سازه</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="./icon/call.svg" alt="svg call icon"  className='icon'/></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="./icon/whatsup.svg" alt="svg of whatsup icon" className='icon'/></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="./icon/linkdin.svg" alt="svg of linkdin icon" className='icon'/></a>

          </div>
        </div>
      </div>
    </div>
  
  )
}

export default page