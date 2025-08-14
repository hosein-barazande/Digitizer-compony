import React from 'react'
import styles from './apartmentcart.module.css';

export const singleApartmentCart = () => {
  return (
    <div className="apartemensCart">
    <h2 className="apartemensCellingType">پیش فروش</h2>
    <a href="#">
        <img src="https://www.mustikaland.co.id/img/apartemen.jpg" alt="آپارتمان برای پیشفروش" className="apartemensCartImg"/>
    </a>
    <section className="apartemensInfo">
        <span className="buildingType">آپارتمان</span>
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
  )
}
