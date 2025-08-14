// app/contact-us/ContactForm.tsx
'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      // نمونه ارسال به API route محلی — اگر ندارید میتوانید این fetch را تغییر دهید
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('پیام با موفقیت ارسال شد. با شما تماس می‌گیریم.');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('ارسال ناموفق بود. لطفاً مجدداً تلاش کنید.');
      }
    } catch (err) {
      console.error(err);
      setStatus('خطا در ارسال. لطفاً اتصال اینترنت خود را بررسی کنید.');
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit} noValidate>
      <h3>فرم تماس</h3>

      <label htmlFor="name">نام و نام خانوادگی</label>
      <input id="name" name="name" value={form.name} onChange={handleChange} required />

      <label htmlFor="email">ایمیل</label>
      <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />

      <label htmlFor="phone">تلفن</label>
      <input id="phone" name="phone" value={form.phone} onChange={handleChange} />

      <label htmlFor="message">پیام</label>
      <textarea id="message" name="message" value={form.message} onChange={handleChange} required />

      <button type="submit" disabled={sending}>
        {sending ? 'در حال ارسال...' : 'ارسال پیام'}
      </button>

      {status && <p className="formStatus">{status}</p>}

      <p className="note">
        برای آگاهی از نحوه مشارکت در ساخت یا پیش‌خرید ملک، در پیام خود لطفاً اشاره کنید تا همکاران ما
        اطلاعات بیشتر را برایتان ارسال کنند.
      </p>
    </form>
  );
}
