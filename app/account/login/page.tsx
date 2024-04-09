import Link from 'next/link';
import LoginForm from '@/app/ui/login-form';

export default function Login() {
  return (
    <>
      <LoginForm />
      <Link href="/account/register">
        <button className="account-btn">Register</button>
      </Link>
    </>
  );
}
