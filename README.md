## Next.js App Router Course - Starter

Next.js es un marco de trabajo que se basa en React, una biblioteca popular de JavaScript. Aunque comparten algunas características básicas, Next.js ofrece funcionalidades adicionales que son muy útiles para mejorar la eficiencia de nuestros sitios web y proporcionar una nueva forma de manejar las rutas.

Ejemplo:
Supongamos que tenemos una aplicación web de comercio electrónico. Con Next.js, podemos crear fácilmente páginas dinámicas para mostrar los productos, gestionar el carrito de compras y procesar los pagos, aprovechando las capacidades de React y las funcionalidades adicionales de Next.js para optimizar el rendimiento y la experiencia del usuario.

En cuanto a las fuentes, Next.js utiliza una técnica especial llamada "fonts", que permite procesar las fuentes durante la construcción del sitio. Esto significa que cuando enviamos las fuentes al navegador, ya están preparadas, lo que evita que el navegador tenga que hacer solicitudes adicionales para cargarlas. Esto ahorra tiempo de carga y ayuda a mejorar el SEO de nuestro sitio web.

Ejemplo:
Supongamos que queremos utilizar una fuente personalizada para nuestro sitio web. Con Next.js, podemos definir la fuente en un archivo especial y Next.js se encargará de procesarla durante la construcción del sitio. Cuando un usuario accede a nuestro sitio, las fuentes personalizadas se cargarán de manera eficiente, mejorando la experiencia de usuario y optimizando el rendimiento del sitio.

Lo mismo ocurre con las imágenes y cualquier otro contenido que esté en la carpeta "public".

Ejemplo:
Si queremos agregar imágenes a nuestro sitio web, simplemente las colocamos en la carpeta "public" de nuestro proyecto. Next.js se encarga automáticamente de optimizarlas y servirlas de manera eficiente, lo que garantiza tiempos de carga rápidos y una experiencia de usuario fluida.

Next.js tiene un sistema de enrutamiento especial que se basa en la estructura de archivos de nuestro proyecto. Hay dos tipos de archivos importantes en este sistema: "page.tsx" y "layout.tsx". "page.tsx" define cuándo un componente debe vincularse a una ruta específica, mientras que "layout.tsx" define un componente que se comparte entre varias rutas. Esta estructura nos ayuda a organizar y gestionar las rutas de nuestro sitio web de manera eficiente.

Ejemplo:
Supongamos que queremos crear una página de inicio y una página de contacto en nuestro sitio web. Podemos crear dos archivos: "index.tsx" para la página de inicio y "contact.tsx" para la página de contacto. En cada archivo, definimos los componentes correspondientes y Next.js se encarga del enrutamiento automáticamente, permitiéndonos navegar entre las diferentes páginas de nuestro sitio web de manera fácil y eficiente.

Además de las funcionalidades que ya hemos mencionado, Next.js también ofrece una característica clave conocida como renderización parcial. Esto significa que no todas las partes de una página web se renderizan de manera simultánea. En lugar de eso, solo se renderiza la parte de la página que es necesaria en un momento dado, lo que mejora significativamente el tiempo de carga y la eficiencia del sitio.

Ejemplo:
Supongamos que tenemos una página web con múltiples secciones, como un encabezado, un menú de navegación y un contenido principal. Con la renderización parcial de Next.js, cuando un usuario accede a la página, inicialmente solo se renderiza el encabezado y el menú de navegación, lo que permite una carga más rápida. A medida que el usuario interactúa con la página, como haciendo clic en un enlace de navegación, solo se renderiza y carga la sección de contenido relevante, en lugar de recargar toda la página. Esto mejora la experiencia del usuario al proporcionar una navegación más fluida y tiempos de carga más rápidos.

En resumen, la renderización parcial de Next.js optimiza la carga de la página al renderizar solo las partes necesarias, lo que resulta en un rendimiento más rápido y una experiencia de usuario mejorada.

Además de las funcionalidades mencionadas, en tu código se utiliza la biblioteca clsx para aplicar estilos condicionales según el estado de los enlaces en la barra de navegación. clsx permite combinar clases de manera dinámica basándose en las condiciones que especifiques.

```bash
'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  // get the current path name
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        // if the current path name is the same as the link
        // then we want to highlight it
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
```
