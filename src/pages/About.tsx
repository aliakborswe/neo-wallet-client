import { Award, Globe, Target, Users2Icon } from "lucide-react";

export default function About() {
  return (
    <>
      <section className='container mx-auto px-4 py-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='mb-6 text-4xl font-bold md:text-5xl'>
            About Neo Wallet
          </h1>
          <p className='text-lg text-muted-foreground'>
            We're on a mission to democratize financial services and make
            digital transactions accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      <section className='border-t border-border bg-card/50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid gap-12 lg:grid-cols-2'>
            <div>
              <h2 className='mb-4 text-3xl font-bold'>Our Story</h2>
              <div className='space-y-4 text-muted-foreground'>
                <p>
                  Founded in 2020, Neo Wallet emerged from a simple observation:
                  traditional financial systems were too slow, too expensive,
                  and too exclusive. We believed there had to be a better way.
                </p>
                <p>
                  Our team of financial technology experts and software
                  engineers came together with a shared vision: to create a
                  digital wallet that combines the security of traditional
                  banking with the speed and accessibility of modern technology.
                </p>
                <p>
                  Today, Neo Wallet serves over 10,000 users across multiple
                  countries, processing millions of dollars in transactions
                  every day. But we're just getting started.
                </p>
              </div>
            </div>

            <div>
              <h2 className='mb-4 text-3xl font-bold'>Our Mission</h2>
              <div className='space-y-4 text-muted-foreground'>
                <p>
                  We believe that everyone deserves access to fast, secure, and
                  affordable financial services. Our mission is to break down
                  the barriers that prevent people from participating in the
                  digital economy.
                </p>
                <p>
                  Through innovative technology and user-centric design, we're
                  building a platform that empowers individuals and businesses
                  to take control of their financial future.
                </p>
                <p>
                  Whether you're sending money to family, paying for services,
                  or managing your business finances, Neo Wallet is here to make
                  it simple, secure, and instant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='mb-12 text-center text-3xl font-bold'>Our Values</h2>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className='text-center'>
              <div className='mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
                <Users2Icon className='h-8 w-8' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>User First</h3>
              <p className='text-sm text-muted-foreground'>
                Every decision we make starts with our users' needs and
                experiences.
              </p>
            </div>

            <div className='text-center'>
              <div className='mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent'>
                <Target className='h-8 w-8' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Innovation</h3>
              <p className='text-sm text-muted-foreground'>
                We constantly push boundaries to deliver cutting-edge financial
                solutions.
              </p>
            </div>

            <div className='text-center'>
              <div className='mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-chart-3/10 text-chart-3'>
                <Award className='h-8 w-8' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Trust</h3>
              <p className='text-sm text-muted-foreground'>
                We earn trust through transparency, security, and reliability.
              </p>
            </div>

            <div className='text-center'>
              <div className='mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-chart-4/10 text-chart-4'>
                <Globe className='h-8 w-8' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Accessibility</h3>
              <p className='text-sm text-muted-foreground'>
                Financial services should be available to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='border-t border-border bg-card/50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='mb-4 text-3xl font-bold'>Join Our Journey</h2>
            <p className='mb-8 text-lg text-muted-foreground'>
              Be part of the financial revolution. Open your Neo Wallet account
              today and experience the future of digital finance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
