import Link from 'next/link';
import { CustomLink } from '../lib/definitions';

export default function NavBar() {
  let links: CustomLink[] = [
    {
      path: '/account/login',
      component: 'login',
    },
    {
      path: '/account/register',
      component: 'register',
    },
  ];

  return (
    <nav className="layout-navbar">
      <ul className="layout-navbar-ul">
        {links.map((link: CustomLink, i: number) => (
          <Link
            className="layout-sidenav-links"
            key={'link' + i}
            href={link.path}
          >
            <p>{link.component}</p>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
