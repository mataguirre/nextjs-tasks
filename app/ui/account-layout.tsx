'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Check if router is available before attempting redirection
    if (router) {
      router.push('/account/login');
    }
  }, [router]); // Include router in the dependency array to ensure useEffect runs when router changes

  // Render loading state or children while waiting for redirection
  if (!router) {
    return <div>Loading...</div>;
  }

  return (
    <div className="account-layout">
      <div className="account-layout-content">{children}</div>
    </div>
  );
}
