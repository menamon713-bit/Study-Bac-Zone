import InfoPage from "@/components/InfoPage";
export default function SupportPage() {
  return <InfoPage title="الدعم الفني" intro="اختر وسيلة التواصل المناسبة لمشكلتك.">
    <div className="contact-options">
      <a className="contact-card" href="mailto:studybaczonesupport@gmail.com"><span>✉️</span><b>البريد الإلكتروني</b><small>studybaczonesupport@gmail.com</small></a>
      <a className="contact-card" href="https://wa.me/201554416094" target="_blank" rel="noreferrer"><span>💬</span><b>واتساب المطور</b><small dir="ltr">01554416094</small></a>
      <a className="contact-card" href="tel:01554416094"><span>📞</span><b>اتصال هاتفي</b><small dir="ltr">01554416094</small></a>
    </div>
    <p className="form-note">عند التواصل، اذكر نوع المشكلة دون إرسال كلمة مرور أو بيانات سرية.</p>
  </InfoPage>;
}