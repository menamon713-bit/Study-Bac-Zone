"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  ["الإبلاغ عن مشكلة", "/report"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeButtonRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const drawer = document.getElementById("site-navigation-drawer");
      const focusable = drawer?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [open]);

  function closeDrawer() {
    setOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-label="فتح القائمة الجانبية"
            aria-expanded={open}
            aria-controls="site-navigation-drawer"
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link className="brand" href="/" onClick={closeDrawer}>
            <span className="brand-mark" aria-hidden="true">SB</span>
            <span>Study <b>Bac zone</b></span>
          </Link>

          <nav className="desktop-nav" aria-label="القائمة الرئيسية">
            <Link href="/library" aria-current={pathname === "/library" ? "page" : undefined}>المكتبة</Link>
            <Link href="/assessments" aria-current={pathname === "/assessments" ? "page" : undefined}>الامتحانات</Link>
            <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>من نحن</Link>
          </nav>

          <Link className="header-login" href="/login">دخول الطلاب</Link>
        </div>
      </header>

      {open && (
        <div className="drawer-layer" onMouseDown={closeDrawer}>
          <aside
            id="site-navigation-drawer"
            className="side-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="القائمة الجانبية"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="drawer-top">
              <div className="drawer-brand">
                <span className="brand-mark" aria-hidden="true">SB</span>
                <div>
                  <b>Study Bac zone</b>
                  <small>مساحتك للتعلم والتفوق</small>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                className="close-button"
                type="button"
                onClick={closeDrawer}
                aria-label="إغلاق القائمة"
              >
                ×
              </button>
            </div>

            <nav className="drawer-links" aria-label="روابط الموقع">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeDrawer}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                  <span aria-hidden="true">←</span>
                </Link>
              ))}
            </nav>

            <div className="drawer-bottom">Developed by <b>M.A.S.H</b></div>
          </aside>
        </div>
      )}
    </>
  );
}
