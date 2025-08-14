"use client";
import React, {useEffect} from "react";
import ContactBtn from "@/components/contactUsBtn/ContactBtn";
// ---------------------- حذف کش
async function getData() {
    const res = await fetch("https://api.example.com/data", {cache: "no-store"}); // جلوگیری از کش
    return res.json();
}

// ----------------------

const Page = () => {
    useEffect(() => {
        const go_up = (scroll_number: number) => {
            const midel_banner = document.querySelector("#midel_banner");
            const front_banner = document.querySelector("#front_banner");

            if (!(midel_banner instanceof HTMLElement) || !(front_banner instanceof HTMLElement)) return;

            if (scroll_number < 525) {
                const midel = -0.1 * scroll_number;
                const front = -0.2 * scroll_number;
                front_banner.style.transform = `translateY(${front}px)`;
                midel_banner.style.transform = `translateY(${midel}px)`;
            }
        };

        const onScroll = () => {
            const scroll_number = window.scrollY;
            go_up(scroll_number);
            console.log(scroll_number);
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    return (
        <>
            {/* _____________________ website banner _______________________ */}

            <section className="svg_banner">
                <div className="logoInBanner">
                    <img src="/logo/goldajorchin.svg" alt="Logo" />
                </div>
                <img
                    src="/svgbanner/city_back.svg"
                    alt="svg illustration of city for banner"
                    className="back_banner"
                    id="back_banner"
                />
                <img
                    src="/svgbanner/city_midel.svg"
                    alt="svg illustration of city for banner"
                    className="midel_banner"
                    id="midel_banner"
                />
                <img
                    src="/svgbanner/city_front.svg"
                    alt="svg illustration of city for banner"
                    className="front_banner"
                    id="front_banner"
                />
            </section>

            {/* _____________________ our service _______________________ */}

            <section className="ourService">
                <section className="ourServiceTitel">
                    <h2>خدمات ما</h2>
                    <p>
                        با بیش از ۳۰ سال سابقه درخشان در صنعت ساخت‌وساز، گروه ساختمانی آجرچین افتخار دارد که خدمات متنوع
                        و تخصصی خود را در زمینه طراحی، اجرا و نظارت بر پروژه‌های ساختمانی ارائه دهد. ما با تکیه بر
                        تجربه‌ی چند دهه‌ای، نیروی انسانی متخصص و بهره‌گیری از متریال‌های باکیفیت، همراه مطمئن شما در
                        تمامی مراحل ساخت و ساز هستیم.
                    </p>
                </section>

                <div className="servicecontainer">
                    <div className="servicebox">
                        <div className="serviceboxcontent">
                            <img src="/serviceicon/Consulting.svg" alt="آیکون مشاوه ساختمان" />
                            <h2>مشاوره، بررسی و امکان‌سنجی زمین</h2>
                            <p>ارزیابی فنی، حقوقی و اقتصادی زمین پیش از شروع پروژه.</p>
                        </div>
                    </div>
                    <div className="servicebox">
                        <div className="serviceboxcontent">
                            <img src="/serviceicon/disign.svg" alt="آیکون طراحی ساختمان" />
                            <h2>طراحی و اخذ مجوز</h2>
                            <p>کشیدن نقشه‌های معماری و دریافت جواز ساخت از شهرداری.</p>
                        </div>
                    </div>
                    <div className="servicebox">
                        <div className="serviceboxcontent">
                            <img src="/serviceicon/handshake.svg" alt="آیکون قرارداد ساختمان" />
                            <h2>عقد قرارداد مشارکت</h2>
                            <p>تنظیم قرارداد شفاف بین مالک و سازنده با تعیین سهم‌الشرکه.</p>
                        </div>
                    </div>

                    <div className="servicebox">
                        <div className="serviceboxcontent">
                            <img src="/serviceicon/mony.svg" alt="آیکون تامین سرمایه" />
                            <h2>تأمین سرمایه و مدیریت مالی</h2>
                            <p>تأمین هزینه‌های ساخت و مدیریت مالی پروژه به صورت مرحله‌ای.</p>
                        </div>
                    </div>

                    <div className="servicebox">
                        <div className="serviceboxcontent">
                            <img src="/serviceicon/Destruction.svg" alt="آیکون آماده‌سازی زمین" />
                            <h2>تخریب و آماده‌سازی زمین</h2>
                            <p>تخریب بنای قدیمی و آماده‌سازی برای عملیات ساخت.</p>
                        </div>
                    </div>

                    <div className="servicebox">
                        <div className="serviceboxcontent">
                            <img src="/serviceicon/Supervision.svg" alt="آیکون نظارت بر ساخت" />
                            <h2>اجرا و نظارت بر ساخت</h2>
                            <p>انجام کلیه مراحل ساخت با نظارت فنی و مهندسی.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* _____________________ lastProjectSection _______________________ */}

            <section className="lastProjectSection">
                <div className="textPart">
                    <h2>جدیدترین پروژه تمام شده ما</h2>
                    <p className="textPartP">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                        مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                        را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                        صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                        زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                        اساسا مورد استفاده قرار گیرد.
                    </p>
                    <section className="moreBtnContainer">
                        <div className="otherBtnContainer">
                            <a href="">
                                <div className="otherBtnCuboid">
                                    <div className="otherFaceBtn OtherFrontBtn">
                                        <p>دیدن پروژه های بیشتر</p>
                                    </div>
                                    <div className="otherFaceBtn otherLeftBtn">
                                        <p>دیدن پروژه های بیشتر</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
                <div className="imagePart">
                    <span></span>
                    <img src="/lastproject/home.jpg" alt="آخرین پروژه ساخته شده" />
                </div>
            </section>

            {/* _____________________ pre sels Section _______________________ */}

            <section className="PreSaleSection">
                <div className="titelPart">
                    <h2>آپارتمانهای آماده پیش فروش</h2>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                        مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                        درصد گذشته حال و آینده
                    </p>
                </div>
                <section className="apartemens">
                    <div className="apartemensCart">
                        <h2 className="apartemensCellingType">پیش فروش</h2>
                        <a href="#">
                            <img
                                src="https://www.mustikaland.co.id/img/apartemen.jpg"
                                alt="آپارتمان برای پیشفروش"
                                className="apartemensCartImg"
                            />
                        </a>
                        <section className="apartemensInfo">
                            <span className="Buildingـtype">آپارتمان</span>
                            <section className="price">
                                <p>مبلغ پیش پرداخت</p>
                                <p>۲۰۰۰،۰۰۰،۰۰۰ تومان</p>
                            </section>
                            <h2 className="projectName">ساختمان پانیز</h2>
                            <h3 className="projectAdress">کرج، بلوار انقلاب، کوچه سیزدهم</h3>
                            <section className="Facilities">
                                <div className="area">
                                    <span className="areaIcon"></span>
                                    <p>۱۳۰ متر</p>
                                </div>
                                <div className="bed">
                                    <span className="bedIcon"></span>
                                    <p>۳ خواب</p>
                                </div>
                                <div className="bath">
                                    <span className="bathIcon"></span>
                                    <p>۲ سرویس</p>
                                </div>
                            </section>
                        </section>
                    </div>

                    <div className="apartemensCart">
                        <h2 className="apartemensCellingType">پیش فروش</h2>
                        <a href="#">
                            <img
                                src="https://www.mustikaland.co.id/img/apartemen.jpg"
                                alt="آپارتمان برای پیشفروش"
                                className="apartemensCartImg"
                            />
                        </a>
                        <section className="apartemensInfo">
                            <span className="Buildingـtype">آپارتمان</span>
                            <section className="price">
                                <p>مبلغ پیش پرداخت</p>
                                <p>۲۰۰۰،۰۰۰،۰۰۰ تومان</p>
                            </section>
                            <h2 className="projectName">ساختمان پانیز</h2>
                            <h3 className="projectAdress">کرج، بلوار انقلاب، کوچه سیزدهم</h3>
                            <section className="Facilities">
                                <div className="area">
                                    <span className="areaIcon"></span>
                                    <p>۱۳۰ متر</p>
                                </div>
                                <div className="bed">
                                    <span className="bedIcon"></span>
                                    <p>۳ خواب</p>
                                </div>
                                <div className="bath">
                                    <span className="bathIcon"></span>
                                    <p>۲ سرویس</p>
                                </div>
                            </section>
                        </section>
                    </div>

                    <div className="apartemensCart">
                        <h2 className="apartemensCellingType">پیش فروش</h2>
                        <a href="#">
                            <img
                                src="https://www.mustikaland.co.id/img/apartemen.jpg"
                                alt="آپارتمان برای پیشفروش"
                                className="apartemensCartImg"
                            />
                        </a>
                        <section className="apartemensInfo">
                            <span className="Buildingـtype">آپارتمان</span>
                            <section className="price">
                                <p>مبلغ پیش پرداخت</p>
                                <p>۲۰۰۰،۰۰۰،۰۰۰ تومان</p>
                            </section>
                            <h2 className="projectName">ساختمان پانیز</h2>
                            <h3 className="projectAdress">کرج، بلوار انقلاب، کوچه سیزدهم</h3>
                            <section className="Facilities">
                                <div className="area">
                                    <span className="areaIcon"></span>
                                    <p>۱۳۰ متر</p>
                                </div>
                                <div className="bed">
                                    <span className="bedIcon"></span>
                                    <p>۳ خواب</p>
                                </div>
                                <div className="bath">
                                    <span className="bathIcon"></span>
                                    <p>۲ سرویس</p>
                                </div>
                            </section>
                        </section>
                    </div>

                    <div className="apartemensCart">
                        <h2 className="apartemensCellingType">پیش فروش</h2>
                        <a href="#">
                            <img
                                src="https://www.mustikaland.co.id/img/apartemen.jpg"
                                alt="آپارتمان برای پیشفروش"
                                className="apartemensCartImg"
                            />
                        </a>
                        <section className="apartemensInfo">
                            <span className="Buildingـtype">آپارتمان</span>
                            <section className="price">
                                <p>مبلغ پیش پرداخت</p>
                                <p>۲۰۰۰،۰۰۰،۰۰۰ تومان</p>
                            </section>
                            <h2 className="projectName">ساختمان پانیز</h2>
                            <h3 className="projectAdress">کرج، بلوار انقلاب، کوچه سیزدهم</h3>
                            <section className="Facilities">
                                <div className="area">
                                    <span className="areaIcon"></span>
                                    <p>۱۳۰ متر</p>
                                </div>
                                <div className="bed">
                                    <span className="bedIcon"></span>
                                    <p>۳ خواب</p>
                                </div>
                                <div className="bath">
                                    <span className="bathIcon"></span>
                                    <p>۲ سرویس</p>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>

                <section className="moreBtnContainer">
                    <div className="otherBtnContainer">
                        <a href="">
                            <div className="otherBtnCuboid">
                                <div className="otherFaceBtn OtherFrontBtn">
                                    <p>مشاهده تمامی واحدها</p>
                                </div>
                                <div className="otherFaceBtn otherLeftBtn">
                                    <p>مشاهده تمامی واحد ها</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
            </section>

            {/* _____________________ call to us section _______________________ */}

            <section className="callToUsSection">
                <div className="textPart">
                    <h2>جهت کسب اطلاعات بیشتر با ما تماس بگیرید</h2>
                    <p>
                        برای دریافت مشاوره تخصصی در زمینه مشارکت در ساخت، پیش‌خرید یا خرید ملک، کارشناسان ما آماده
                        راهنمایی شما هستند. با ما تماس بگیرید تا اطلاعات کاملی درباره فرصت‌های سرمایه‌گذاری و شرایط
                        همکاری دریافت کنید.
                    </p>
                    <section className="moreBtnContainer">
                        <div className="otherBtnContainer">
                            <a href="">
                                <div className="otherBtnCuboid">
                                    <div className="otherFaceBtn OtherFrontBtn">
                                        <p>شماره تماس: ۰۹۱۲۷۶۵۴۳۲۱</p>
                                    </div>
                                    <div className="otherFaceBtn otherLeftBtn">
                                        <p>شماره تماس: ۰۹۱۲۷۶۵۴۳۲۱</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
                <div className="imagePart">
                    <img src="./contactus/young-woman-call-center.jpg" alt="call manager in our compony" />
                </div>
            </section>

             {/* _____________________ carousel section _______________________ */}
            

        </>
    );
};

export default Page;
