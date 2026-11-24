import InfoPage from "@/components/InfoPage";
export default function AboutPage() {
  return <InfoPage title="من نحن" intro="تعرف على Study Bac zone وفكرتها.">
    <h2>ما هي Study Bac zone؟</h2>
    <p>Study Bac zone مشروع واجهة تعليمية يهدف إلى تنظيم تجربة المذاكرة لطلاب البكالوريا، من خلال المكتبة التعليمية والدروس والتقييمات ومتابعة الإنجاز.</p>
    <h2>رؤية المنصة</h2>
    <p>تقديم تجربة واضحة وسهلة تساعد الطالب على تنظيم وقته ومراجعة ما تعلمه.</p>
    <p className="developer-credit">تصميم وتطوير الواجهة: <strong>M.A.S.H</strong></p>
    <p className="form-note">المنصة في مرحلة التطوير، والمحتوى والخدمات الفعلية ستُضاف بعد مراجعتها وربطها تقنيًا.</p>
  </InfoPage>;
}