import { Link } from "react-router";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className='border-t border-border py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-8 md:grid-cols-4'>
          <div>
            <Logo className='py-5' />
            <p className='text-sm text-muted-foreground'>
              The future of digital finance, available today.
            </p>
          </div>

          <div>
            <h4 className='mb-4 font-semibold'>Product</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <Link to='/features' className='hover:text-foreground'>
                  Features
                </Link>
              </li>
              <li>
                <Link to='/pricing' className='hover:text-foreground'>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to='/about' className='hover:text-foreground'>
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 font-semibold'>Support</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <Link to='/faq' className='hover:text-foreground'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to='/contact' className='hover:text-foreground'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 font-semibold'>Legal</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <Link to='/privacy-policy' className='hover:text-foreground'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='/terms-of-service' className='hover:text-foreground'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-border pt-8 sm:flex space-y-4 sm:space-y-0 justify-between items-center text-sm text-muted-foreground'>
          <p className='text-center w-full md:w-auto'>
            &copy; {new Date().getFullYear()} Neo Wallet. All rights reserved.
          </p>
            {/* social media icons */}
            <div className='flex justify-center items-center gap-4'>
              <a
                href='https://facebook.com/aliakborse'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
                className='hover:text-blue-600'
              >
                <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0' />
                </svg>
              </a>
              <a
                href='https://twitter.com/aliakborswe'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'
                className='hover:text-sky-500'
              >
                <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89-.386.104-.793.16-1.213.16-.297 0-.583-.028-.862-.08.584 1.823 2.28 3.152 4.29 3.188A9.868 9.868 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z' />
                </svg>
              </a>
              <a
                href='https://linkedin.com/in/aliakborswe'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className='hover:text-blue-700'
              >
                <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z' />
                </svg>
              </a>
              <a
                href='https://instagram.com/aliakborswe'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
                className='hover:text-pink-500'
              >
                <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.094 12 2.094m0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' />
                </svg>
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
}
