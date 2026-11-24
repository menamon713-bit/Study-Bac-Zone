import InfoPage from "@/components/InfoPage";
export default function AssessmentsPage() {
  return <InfoPage title="التقييمات والامتحانات" intro="تدريبات الدروس والاختبارات الأسبوعية.">
    <div className="empty-state"><span>📝</span><h2>نظام التقييمات قيد التجهيز</h2><p>ستُربط التقييمات ببنك أسئلة ومحتوى الدروس بعد تجهيز Backend.</p></div>
  </InfoPage>;
}