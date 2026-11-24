import InfoPage from "@/components/InfoPage";
import CatalogExplorer from "@/components/CatalogExplorer";
import { subjects, demoNotice } from "@/data/demo-content";

export default function LibraryPage() {
  return (
    <InfoPage title="المكتبة التعليمية" intro="تصفح المواد والدروس النموذجية، وابحث عن المادة التي تريدها.">
      <div className="notice-banner"><span>ⓘ</span><p>{demoNotice}</p></div>
      <CatalogExplorer subjects={subjects} />
    </InfoPage>
  );
}
