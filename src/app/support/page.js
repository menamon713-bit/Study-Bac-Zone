import InfoPage from "@/components/InfoPage";

export default function SupportPage() {
  return (
    <InfoPage title="الدعم الفني" intro="اختر وسيلة التواصل المناسبة للاستفسارات أو المشكلات العامة.">
      <div className="contact-options">
        <a className="contact-card" href="mailto:studybaczonesupport@gmail.com">
          <span aria-hidden="true">✉️</span>
          <b>البريد الإلكتروني</b>
          <small>studybaczonesupport@gmail.com</small>
        </a>

        <a
          className="contact-card"
          href="https://wa.me/201554416094"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden="true">💬</span>
          <b>واتساب</b>
          <small dir="ltr">01554416094</small>
        </a>

        <a className="contact-card" href="tel:01554416094">
          <span aria-hidden="true">📞</span>
          <b>اتصال هاتفي</b>
          <small dir="ltr">01554416094</small>
        </a>
      </div>

      <p className="form-note">
        عند التواصل، اشرح المشكلة دون إرسال كلمات مرور أو أكواد دخول سرية
        أو بيانات مالية. لا تُرسل بيانات تخص طالبًا آخر دون إذنه.
      </p>
    </InfoPage>
  );
}
