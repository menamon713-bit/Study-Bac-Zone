import InfoPage from "@/components/InfoPage";
export default function RewardsPage() {
  return <InfoPage title="النقاط والهدايا" intro="تابع إنجازاتك ومكافآتك التعليمية.">
    <div className="empty-state"><span>🏆</span><h2>نظام المكافآت قيد التجهيز</h2><p>سيتم احتساب النقاط من إنجازات موثقة على الخادم عند ربط Backend.</p></div>
  </InfoPage>;
}