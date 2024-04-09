import '@/app/ui/global.css';
import ApplicationLayout from './ui/application-layout';
import AccountLayout from './ui/account-layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userLogged = true;

  return (
    <html lang="en">
      <title>NextJS</title>
      <body className="root-layout-container">
        {userLogged ? (
          <ApplicationLayout>{children}</ApplicationLayout>
        ) : (
          <AccountLayout>{children}</AccountLayout>
        )}
      </body>
    </html>
  );
}
