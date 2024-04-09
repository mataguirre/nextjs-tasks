'use client';

import clsx from 'clsx';
import { useState } from 'react';
import NavLinks from './nav-links';
import NavBar from './nav-bar';

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSideNav, setSideNav] = useState(false);

  return (
    <>
      {/* static navbar */}
      <NavBar />

      {/* static aside */}
      <aside
        className={clsx('layout-sidenav', {
          'layout-sidenav-hide': showSideNav,
        })}
      >
        {/* aside nav links */}
        <NavLinks />

        <button
          onClick={() => setSideNav(!showSideNav)}
          className="layout-sidenav-btn"
        >
          {showSideNav ? '>' : '<'}
        </button>
      </aside>

      {/* dynamic main content */}
      <div
        className={clsx('layout-content', {
          'layout-content-full': showSideNav,
        })}
      >
        {children}
      </div>
    </>
  );
}
