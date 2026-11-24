import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <section className="footer-about">
          <Link href="/" className="footer-brand">Study <b>Bac zone</b></Link>
          <p>مساحة تعليمية تساعد طلاب البكالوريا على تنظيم المذاكرة ومتابعة تقدمهم.</p>
          <p className="developer-credit">Developed by <strong>M.A.S.H</strong></p>
        </section>

        <section>
          <h2>روابط مهمة</h2>
          <Link href="/about">من نحن</Link>
          <Link href="/faq">الأسئلة الشائعة</Link>
          <Link href="/terms">شروط الاستخدام</Link>
          <Link href="/privacy">سياسة الخصوصية</Link>
        </section>

        <section>
          <h2>المساعدة والدعم</h2>
          <Link href="/support">الدعم الفني</Link>
          <Link href="/report">الإبلاغ عن مشكلة</Link>
          <Link href="/certificates/verify">التحقق من الشهادات</Link>
        </section>

        <section>
          <h2>تواصل معنا</h2>
          <a href="tel:01554416094" dir="ltr">01554416094</a>
          <a href="https://wa.me/201554416094" target="_blank" rel="noreferrer">واتساب المطور</a>
          <a href="mailto:studybaczonesupport@gmail.com">studybaczonesupport@gmail.com</a>
        </section>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Study Bac zone — جميع الحقوق محفوظة</span>
        <span>Developed by M.A.S.H</span>
      </div>
    </footer>
  );
}