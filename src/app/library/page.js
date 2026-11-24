import InfoPage from "@/components/InfoPage";
export default function LibraryPage() {
  return <InfoPage title="المكتبة التعليمية" intro="مكان الكتب والمراجع والملفات الدراسية.">
    <div className="empty-state"><span>📚</span><h2>المكتبة قيد التجهيز</h2><p>سيتم إضافة الكتب والمواد بعد التحقق من المناهج ومصادر المحتوى وحقوق نشره.</p></div>
  </InfoPage>;
}