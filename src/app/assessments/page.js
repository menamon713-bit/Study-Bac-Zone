import InfoPage from "@/components/InfoPage";
import QuizDemo from "@/components/QuizDemo";
import { sampleQuestions, demoNotice } from "@/data/demo-content";

export default function AssessmentsPage() {
  return (
    <InfoPage title="التقييمات والامتحانات" intro="جرّب نموذج اختبار تفاعلي، ثم راجع إجاباتك وتفسيرها.">
      <div className="notice-banner"><span>ⓘ</span><p>{demoNotice} الأسئلة التالية عامة وتجريبية وليست امتحانًا رسميًا أو من بنك أسئلة المنهج.</p></div>
      <QuizDemo questions={sampleQuestions} />
      <div className="content-note"><b>ملاحظة للمرحلة التالية</b><p>عند ربط Backend سيُستبدل مصدر الأسئلة التجريبي ببنك الأسئلة، وتُدار المحاولات والوقت والنتائج من الخادم.</p></div>
    </InfoPage>
  );
}
