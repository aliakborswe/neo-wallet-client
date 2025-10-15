import { BarChart3, CheckCircle, Clock, CreditCard, Globe, HeadphonesIcon, Lock, Shield, Smartphone, TrendingUp, Users, Zap } from "lucide-react";


export default function Features() {
  return (
    <div className='min-h-screen'>

      <section className='container mx-auto px-4 py-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='mb-6 text-4xl font-bold md:text-5xl'>
            Powerful Features for Modern Finance
          </h1>
          <p className='text-lg text-muted-foreground'>
            Everything you need to manage your money, all in one secure
            platform.
          </p>
        </div>
      </section>

      <section className='border-t border-border py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='rounded-2xl border border-border bg-card p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                <Shield className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>
                Bank-Level Security
              </h3>
              <p className='text-sm text-muted-foreground'>
                Military-grade encryption, two-factor authentication, and
                biometric security keep your funds safe 24/7.
              </p>
            </div>

            <div className='rounded-2xl border border-border bg-card p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent'>
                <Zap className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Instant Transfers</h3>
              <p className='text-sm text-muted-foreground'>
                Send and receive money in real-time. No waiting periods, no
                delays, just instant transactions.
              </p>
            </div>

            <div className='rounded-2xl border border-border bg-card p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-chart-3/10 text-chart-3'>
                <TrendingUp className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Smart Analytics</h3>
              <p className='text-sm text-muted-foreground'>
                Visualize your spending patterns, track trends, and get insights
                to make better financial decisions.
              </p>
            </div>

            <div className='rounded-2xl border border-border bg-card p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-chart-4/10 text-chart-4'>
                <Smartphone className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Mobile First</h3>
              <p className='text-sm text-muted-foreground'>
                Fully responsive design works seamlessly on any device. Manage
                your wallet on the go.
              </p>
            </div>

            <div className='rounded-2xl border border-border bg-card p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-chart-5/10 text-chart-5'>
                <Lock className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Privacy Protected</h3>
              <p className='text-sm text-muted-foreground'>
                Your personal information and transaction history are encrypted
                and never shared without permission.
              </p>
            </div>

            <div className='rounded-2xl border border-border bg-card p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                <CreditCard className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>
                Multiple Payment Methods
              </h3>
              <p className='text-sm text-muted-foreground'>
                Add money via bank transfer, card, or cash. Withdraw to your
                bank account anytime.
              </p>
            </div>

            <div className='rounded-2xl border border-border bg-card p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent'>
                <Users className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Agent Network</h3>
              <p className='text-sm text-muted-foreground'>
                Access our network of verified agents for cash-in and cash-out
                services in your area.
              </p>
            </div>

            <div className='rounded-2xl border border-border bg-card p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-chart-3/10 text-chart-3'>
                <BarChart3 className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>
                Transaction History
              </h3>
              <p className='text-sm text-muted-foreground'>
                Complete transaction records with advanced filtering, search,
                and export capabilities.
              </p>
            </div>

            <div className='rounded-2xl border border-border bg-card p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-chart-4/10 text-chart-4'>
                <Clock className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>24/7 Availability</h3>
              <p className='text-sm text-muted-foreground'>
                Access your wallet anytime, anywhere. Our platform is always
                available when you need it.
              </p>
            </div>

            <div className='rounded-2xl border border-border bg-card p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-chart-5/10 text-chart-5'>
                <Globe className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Multi-Currency</h3>
              <p className='text-sm text-muted-foreground'>
                Support for multiple currencies with real-time exchange rates
                and low conversion fees.
              </p>
            </div>

            <div className='rounded-2xl border border-border bg-card p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                <HeadphonesIcon className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Customer Support</h3>
              <p className='text-sm text-muted-foreground'>
                Dedicated support team available 24/7 via chat, email, or phone
                to help with any issues.
              </p>
            </div>

            <div className='rounded-2xl border border-border bg-card p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent'>
                <CheckCircle className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>
                Verified Transactions
              </h3>
              <p className='text-sm text-muted-foreground'>
                Every transaction is verified and recorded with complete
                transparency and audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}