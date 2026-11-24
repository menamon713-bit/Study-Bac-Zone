"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  ["الرئيسية", "/"],
  ["تسجيل الدخول", "/login"],
  ["المكتبة التعليمية", "/library"],
  ["الصف الأول بكالوريا", "/grade/first"],
  ["الصف الثاني بكالوريا", "/grade/second"],
  ["التقييمات والامتحانات", "/assessments"],
  ["النقاط والهدايا", "/rewards"],
  ["الشهادات", "/certificates"],
  ["من نحن", "/about"],
  ["الأسئلة الشائعة", "/faq"],
  ["الدعم الفني", "/support"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <button
            className="menu-button"
            type="button"
            aria-label="فتح القائمة الجانبية"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span></span><span></span><span></span>
          </button>

          <Link className="brand" href="/" onClick={() => setOpen(false)}>
            <span className="brand-mark">SB</span>
            <span>Study <b>Bac zone</b></span>
          </Link>

          <nav className="desktop-nav" aria-label="القائمة الرئيسية">
            <Link href="/library">المكتبة</Link>
            <Link href="/assessments">الامتحانات</Link>
            <Link href="/about">من نحن</Link>
          </nav>

          <Link className="header-login" href="/login">دخول الطلاب</Link>
        </div>
      </header>

      {open && (
        <div className="drawer-layer" onClick={() => setOpen(false)}>
          <aside
            className="side-drawer"
            onClick={(event) => event.stopPropagation()}
            aria-label="القائمة الجانبية"
          >
            <div className="drawer-top">
              <div className="drawer-brand">
                <span className="brand-mark">SB</span>
                <div><b>Study Bac zone</b><small>مساحتك للتعلم والتفوق</small></div>
              </div>
              <button className="close-button" onClick={() => setOpen(false)} aria-label="إغلاق القائمة">×</button>
            </div>
            <nav className="drawer-links">
              {links.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<span>←</span></Link>
              ))}
            </nav>
            <div className="drawer-bottom">Developed by <b>M.A.S.H</b></div>
          </aside>
        </div>
      )}
    </>
  );
}