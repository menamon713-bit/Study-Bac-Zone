import InfoPage from "@/components/InfoPage";

const emailSubject = encodeURIComponent("بلاغ عن مشكلة في Study Bac zone");
const whatsappMessage = encodeURIComponent(
  "مرحبًا، أريد الإبلاغ عن مشكلة في منصة Study Bac zone."
);

export default function ReportPage() {
  return (
    <InfoPage
      title="الإبلاغ عن مشكلة"
      intro="يمكنك إرسال وصف مختصر للمشكلة عبر إحدى قنوات التواصل التالية."
    >
      <div className="contact-options">
        <a
          className="contact-card"
          href={`mailto:studybaczonesupport@gmail.com?subject=${emailSubject}`}
        >
          <span aria-hidden="true">✉️</span>
          <b>إرسال بلاغ بالبريد</b>
          <small>studybaczonesupport@gmail.com</small>
        </a>

        <a
          className="contact-card"
          href={`https://wa.me/201554416094?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden="true">💬</span>
          <b>الإبلاغ عبر واتساب</b>
          <small dir="ltr">01554416094</small>
        </a>
      </div>

      <p className="form-note">
        اذكر الصفحة والخطوات التي سبقت المشكلة. لا ترسل كلمات مرور أو أكواد
        سرية أو معلومات مالية أو بيانات شخصية غير ضرورية.
      </p>
    </InfoPage>
  );
}
