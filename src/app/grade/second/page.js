import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import CatalogExplorer from "@/components/CatalogExplorer";
import { subjects, demoNotice } from "@/data/demo-content";

export default function SecondGradePage() {
  return (
    <InfoPage title="الصف الثاني بكالوريا" intro="مساحة الصف الثاني: تصفح المواد والنماذج التعليمية المتاحة في الواجهة.">
      <div className="notice-banner"><span>ⓘ</span><p>{demoNotice} أسماء المواد هنا لأغراض تصميم الواجهة، ويجب مطابقتها مع توزيع المنهج المعتمد.</p></div>
      <div className="grade-overview"><div><span>02</span><b>الصف الثاني</b><small>مواد ودروس نموذجية</small></div><Link className="button-secondary" href="/assessments">جرّب نموذج اختبار</Link></div>
      <CatalogExplorer subjects={subjects.filter((subject) => subject.grades.includes("second"))} grade="second" />
    </InfoPage>
  );
}
