import Link from 'next/link';

import BlogLogo from '@icons/NTPARCHIVE.svg';
import { Container } from '@src/components/shared/container';

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-pizazz-500 py-1 shadow-combined-custom">
      <nav>
        <Container className="flex items-center justify-between">
          <Link href="/" title={'common.homepage'}>
            <BlogLogo />
          </Link>
          <div className="flex items-center justify-center space-x-4">
            <Link
              href="/work"
              className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out hover:font-bold"
            >
              WORK
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out hover:font-bold"
            >
              ABOUT
            </Link>
          </div>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out hover:font-bold"
          >
            CONTACT
          </Link>
        </Container>
      </nav>
    </header>
  );
};
