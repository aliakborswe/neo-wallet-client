import { Link } from "react-router";
import Logo from "./Logo";


export default function Footer() {
  return (
    <footer className='border-t border-border py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-8 md:grid-cols-4'>
          <div>
            <Logo className="py-5" />
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
                <Link to='#' className='hover:text-foreground'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-foreground'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground'>
          <p>&copy; 2025 Neo Wallet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
