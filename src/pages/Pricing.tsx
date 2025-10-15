import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router";

export default function Pricing() {
  return (
    <div className='min-h-screen'>
      <section className='container mx-auto px-4 py-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='mb-6 text-4xl font-bold md:text-5xl'>
            Simple, Transparent Pricing
          </h1>
          <p className='text-lg text-muted-foreground'>
            No hidden fees. No surprises. Just straightforward pricing that
            works for everyone.
          </p>
        </div>
      </section>

      <section className='container mx-auto px-4 pb-20'>
        <div className='grid gap-8 lg:grid-cols-3'>
          <div className='rounded-2xl border border-border bg-card p-8'>
            <div className='mb-6'>
              <h3 className='mb-2 text-2xl font-bold'>Personal</h3>
              <p className='text-sm text-muted-foreground'>
                Perfect for individual users
              </p>
            </div>

            <div className='mb-6'>
              <div className='text-4xl font-bold'>Free</div>
              <p className='text-sm text-muted-foreground'>Forever</p>
            </div>

            <ul className='mb-8 space-y-3'>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>Unlimited transactions</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>Send money: 1% fee</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>Withdraw: 1.5% fee</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>Add money: Free</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>24/7 customer support</span>
              </li>
            </ul>

            <Button className='w-full' asChild>
              <Link to='/register'>Get Started</Link>
            </Button>
          </div>

          <div className='relative rounded-2xl border-2 border-primary bg-card p-8'>
            <div className='absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground'>
              Most Popular
            </div>

            <div className='mb-6'>
              <h3 className='mb-2 text-2xl font-bold'>Agent</h3>
              <p className='text-sm text-muted-foreground'>
                For service providers
              </p>
            </div>

            <div className='mb-6'>
              <div className='text-4xl font-bold'>Commission</div>
              <p className='text-sm text-muted-foreground'>
                Based on transactions
              </p>
            </div>

            <ul className='mb-8 space-y-3'>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>All Personal features</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>Cash-in services</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>Cash-out services</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>Earn commission on transactions</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>Priority support</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>Agent dashboard</span>
              </li>
            </ul>

            <Button className='w-full' asChild>
              <Link to='/register'>Become an Agent</Link>
            </Button>
          </div>

          <div className='rounded-2xl border border-border bg-card p-8'>
            <div className='mb-6'>
              <h3 className='mb-2 text-2xl font-bold'>Enterprise</h3>
              <p className='text-sm text-muted-foreground'>
                For large organizations
              </p>
            </div>

            <div className='mb-6'>
              <div className='text-4xl font-bold'>Custom</div>
              <p className='text-sm text-muted-foreground'>
                Contact us for pricing
              </p>
            </div>

            <ul className='mb-8 space-y-3'>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>All Agent features</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>Custom fee structure</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>API access</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>Dedicated account manager</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>Advanced analytics</span>
              </li>
              <li className='flex items-start gap-3'>
                <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span className='text-sm'>White-label options</span>
              </li>
            </ul>

            <Button className='w-full bg-transparent' variant='outline' asChild>
              <Link to='/contact'>Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className='border-t border-border bg-card/50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl'>
            <h2 className='mb-8 text-center text-3xl font-bold'>
              Transaction Fees
            </h2>
            <div className='space-y-4'>
              <div className='flex items-center justify-between rounded-lg border border-border bg-card p-4'>
                <span className='font-medium'>Send Money</span>
                <span className='text-primary'>Free</span>
              </div>
              <div className='flex items-center justify-between rounded-lg border border-border bg-card p-4'>
                <span className='font-medium'>Withdraw Money</span>
                <span className='text-muted-foreground'>
                  1.5% of transaction amount
                </span>
              </div>
              <div className='flex items-center justify-between rounded-lg border border-border bg-card p-4'>
                <span className='font-medium'>Add Money</span>
                <span className='text-primary'>Free</span>
              </div>
              <div className='flex items-center justify-between rounded-lg border border-border bg-card p-4'>
                <span className='font-medium'>Cash-In (via Agent)</span>
                <span className='text-primary'>Free</span>
              </div>
              <div className='flex items-center justify-between rounded-lg border border-border bg-card p-4'>
                <span className='font-medium'>Cash-Out (via Agent)</span>
                <span className='text-muted-foreground'>
                  Agent commission applies
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}