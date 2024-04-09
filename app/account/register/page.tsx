import Link from 'next/link';
import RegisterForm from '@/app/ui/register-form';

export default function Register() {
  return (
    <>
      <RegisterForm />
      <Link href="/account/login">
        <button className="account-btn">Login</button>
      </Link>
    </>
  );
}
