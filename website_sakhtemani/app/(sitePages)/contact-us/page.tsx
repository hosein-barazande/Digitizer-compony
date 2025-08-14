// app/contact-us/page.tsx
import './ContactUs.css';
import ContactForm from './ContactForm';

export default function Page() {
  return (
    <main className="contactSection">
      <div className="container">
        <header className="hero">
          <h1 className="contactTitle">همین حالا با ما تماس بگیرید</h1>
          <p className="lead">
            برای دریافت مشاوره، اطلاعات پروژه یا آگاهی از نحوه مشارکت در ساخت و پیش‌خرید واحدها
            لطفاً فرم زیر را تکمیل کنید یا با اطلاعات تماس ما در ارتباط باشید. کارشناسان ما در کوتاه‌ترین
            زمان پاسخ خواهند داد.
          </p>
        </header>
        <section className='cantactus'>
          <div className='phone-number cantactus-section'>
            <img src="./icon/phonecall.svg" alt="svg icon of phone call" />
            <h2>شماره تماس ما</h2>
            <a href="#">0912000000000</a><br/>
            <a href="#">0912000000000</a>
          </div>
          <div className='email cantactus-section'>
          <img src="./icon/emailadress.svg" alt="svg icon of email" />
          <h2>آدرس ایمیل ما</h2>
          <a href="#">info@ajoorchin.com</a>
          </div>
          <div className='adress cantactus-section'>
          <img src="./icon/location.svg" alt="svg icon of location" />
          <h2>آدرس دفتر ما</h2>
          <p>آدرس دفتر مرکزی: تهران، خیابان آزادی، پلاک ۱۲۳</p>
          </div>
        </section>

        <section className="content">
          <aside className="infoCard" aria-labelledby="contact-info-title">
            <h2 id="contact-info-title">اطلاعات تماس</h2>
            <p>آدرس دفتر مرکزی: تهران، خیابان آزادی، پلاک ۱۲۳</p>
            <p>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
            <p>ایمیل: info@ajorchin.com</p>

            <div className="mapWrapper" aria-hidden="false">
              {/* iframe با src ثابت تا SSR و client html یکسان باشد */}
              <iframe
                title="نقشه آجر چین"
                src="https://maps.google.com/maps?q=Tehran&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                width="100%"
                height="240"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          {/* فرم که در کامپوننت کلاینت مدیریت میشود */}
          <div className="formCard">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
