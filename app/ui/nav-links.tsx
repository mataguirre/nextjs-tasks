import Link from 'next/link';
import { CustomLink } from '../lib/definitions';

export default function NavLinks() {
  let links: CustomLink[] = [
    {
      path: '/tasks',
      component: 'tasks',
    },
  ];

  return (
    <nav>
      <ul>
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
