import InfoPage from "@/components/InfoPage";
export default function ReportPage() {
  return <InfoPage title="الإبلاغ عن مشكلة" intro="يمكنك إرسال وصف المشكلة إلى فريق الدعم.">
    <div className="contact-options">
      <a className="contact-card" href="mailto:studybaczonesupport@gmail.com?subject=بلاغ%20عن%20مشكلة"><span>✉️</span><b>إرسال بلاغ بالبريد</b><small>studybaczonesupport@gmail.com</small></a>
      <a className="contact-card" href="https://wa.me/201554416094?text=أرغب%20في%20الإبلاغ%20عن%20مشكلة%20في%20Study%20Bac%20zone" target="_blank" rel="noreferrer"><span>💬</span><b>الإبلاغ عبر واتساب</b><small>01554416094</small></a>
    </div>
  </InfoPage>;
}