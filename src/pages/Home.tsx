import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20 md:py-32'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <div className='space-y-8'>
            <div className='inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary'>
              Trusted by 10,000+ users worldwide
            </div>

            <h1 className='text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl'>
              Finance without the middleman.
            </h1>

            <p className='text-pretty text-lg text-muted-foreground md:text-xl'>
              Do more with your digital assets. The secure platform that brings
              fast, reliable financial transactions directly to you.
            </p>

            <div className='flex flex-wrap gap-4'>
              <Button size='lg' asChild className='gap-2'>
                <Link to='/register'>
                  Open Your Wallet <ArrowRight className='h-4 w-4' />
                </Link>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link to='/features'>Learn More</Link>
              </Button>
            </div>

            <div className='flex items-center gap-8 pt-4'>
              <div>
                <div className='text-3xl font-bold text-primary'>$2.5B+</div>
                <div className='text-sm text-muted-foreground'>
                  Transaction Volume
                </div>
              </div>
              <div className='h-12 w-px bg-border' />
              <div>
                <div className='text-3xl font-bold text-primary'>99.9%</div>
                <div className='text-sm text-muted-foreground'>Uptime</div>
              </div>
              <div className='h-12 w-px bg-border' />
              <div>
                <div className='text-3xl font-bold text-primary'>24/7</div>
                <div className='text-sm text-muted-foreground'>Support</div>
              </div>
            </div>
          </div>

          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl' />
            <div className='relative rounded-2xl border border-border bg-card p-8'>
              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-muted-foreground'>
                    Available Balance
                  </span>
                  <span className='text-xs text-muted-foreground'>
                    Last 7 Days
                  </span>
                </div>
                <div className='space-y-2'>
                  <div className='text-4xl font-bold'>$401,840</div>
                  <div className='flex items-center gap-2 text-sm text-primary'>
                    <TrendingUp className='h-4 w-4' />
                    <span>+2.3% from last week</span>
                  </div>
                </div>

                <div className='h-32 w-full'>
                  <svg viewBox='0 0 400 100' className='h-full w-full'>
                    <defs>
                      <linearGradient
                        id='chartGradient'
                        x1='0%'
                        y1='0%'
                        x2='0%'
                        y2='100%'
                      >
                        <stop
                          offset='0%'
                          stopColor='rgb(16, 185, 129)'
                          stopOpacity='0.3'
                        />
                        <stop
                          offset='100%'
                          stopColor='rgb(16, 185, 129)'
                          stopOpacity='0'
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d='M 0 80 L 50 70 L 100 75 L 150 60 L 200 65 L 250 50 L 300 45 L 350 40 L 400 35'
                      fill='none'
                      stroke='rgb(16, 185, 129)'
                      strokeWidth='2'
                    />
                    <path
                      d='M 0 80 L 50 70 L 100 75 L 150 60 L 200 65 L 250 50 L 300 45 L 350 40 L 400 35 L 400 100 L 0 100 Z'
                      fill='url(#chartGradient)'
                    />
                  </svg>
                </div>

                <div className='grid grid-cols-3 gap-4 pt-4'>
                  <div className='rounded-lg bg-background p-3'>
                    <div className='text-xs text-muted-foreground'>Sent</div>
                    <div className='text-lg font-semibold'>$89.2K</div>
                  </div>
                  <div className='rounded-lg bg-background p-3'>
                    <div className='text-xs text-muted-foreground'>
                      Received
                    </div>
                    <div className='text-lg font-semibold'>$124.8K</div>
                  </div>
                  <div className='rounded-lg bg-background p-3'>
                    <div className='text-xs text-muted-foreground'>Saved</div>
                    <div className='text-lg font-semibold'>$45.6K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className='bg-card/50 py-16 border-t border-border'>
        <div className='container mx-auto px-4'>
          <div className='mb-10 text-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-accent'>
              Statistics
            </h2>
            <p className='mt-2 text-muted-foreground'>
              Neo Wallet by the numbers
            </p>
          </div>
          <div className='grid gap-8 md:grid-cols-4 text-center'>
            <div className='p-6 rounded-xl bg-primary/10'>
              <div className='text-3xl font-bold text-primary'>10,000+</div>
              <div className='text-sm text-muted-foreground'>Active Users</div>
            </div>
            <div className='p-6 rounded-xl bg-accent/10'>
              <div className='text-3xl font-bold text-accent'>$2.5B+</div>
              <div className='text-sm text-muted-foreground'>
                Total Transactions
              </div>
            </div>
            <div className='p-6 rounded-xl bg-chart-3/10'>
              <div className='text-3xl font-bold text-chart-3'>99.9%</div>
              <div className='text-sm text-muted-foreground'>Uptime</div>
            </div>
            <div className='p-6 rounded-xl bg-primary/10'>
              <div className='text-3xl font-bold text-primary'>24/7</div>
              <div className='text-sm text-muted-foreground'>
                Customer Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='bg-card/50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='mb-12 text-center'>
            <h2 className='text-3xl font-bold md:text-4xl'>
              Why Choose Neo Wallet
            </h2>
            <p className='mt-4 text-lg text-muted-foreground'>
              Built for speed, security, and simplicity
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            <div className='group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                <Shield className='h-6 w-6' />
              </div>
              <h3 className='mb-3 text-xl font-semibold'>
                Bank-Level Security
              </h3>
              <p className='text-muted-foreground'>
                Your funds are protected with enterprise-grade encryption and
                multi-factor authentication.
              </p>
            </div>

            <div className='group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent'>
                <Zap className='h-6 w-6' />
              </div>
              <h3 className='mb-3 text-xl font-semibold'>Instant Transfers</h3>
              <p className='text-muted-foreground'>
                Send and receive money in seconds. No waiting, no delays, just
                instant transactions.
              </p>
            </div>

            <div className='group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-chart-3/10 text-chart-3'>
                <TrendingUp className='h-6 w-6' />
              </div>
              <h3 className='mb-3 text-xl font-semibold'>Smart Analytics</h3>
              <p className='text-muted-foreground'>
                Track your spending, visualize trends, and make informed
                financial decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Features Section */}
      <section className='bg-gradient-to-r from-primary/5 to-accent/10 py-16'>
        <div className='container mx-auto px-4'>
          <div className='mb-10 text-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-primary'>
              Highlight Features
            </h2>
            <p className='mt-2 text-muted-foreground'>
              Explore what makes Neo Wallet unique
            </p>
          </div>
          <div className='grid gap-8 md:grid-cols-4'>
            <div className='rounded-xl p-6 flex flex-col items-center'>
              <Shield className='h-8 w-8 text-primary mb-2' />
              <h4 className='font-semibold mb-1'>Security First</h4>
              <p className='text-xs text-muted-foreground text-center'>
                End-to-end encryption and fraud protection.
              </p>
            </div>
            <div className='rounded-xl p-6 flex flex-col items-center'>
              <Zap className='h-8 w-8 text-accent mb-2' />
              <h4 className='font-semibold mb-1'>Lightning Fast</h4>
              <p className='text-xs text-muted-foreground text-center'>
                Instant money transfers and payments.
              </p>
            </div>
            <div className='rounded-xl p-6 flex flex-col items-center'>
              <TrendingUp className='h-8 w-8 text-chart-3 mb-2' />
              <h4 className='font-semibold mb-1'>Analytics</h4>
              <p className='text-xs text-muted-foreground text-center'>
                Track, analyze, and optimize your finances.
              </p>
            </div>
            <div className='rounded-xl p-6 flex flex-col items-center'>
              <ArrowRight className='h-8 w-8 text-primary mb-2' />
              <h4 className='font-semibold mb-1'>Easy Onboarding</h4>
              <p className='text-xs text-muted-foreground text-center'>
                Quick registration and wallet setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='bg-card/50 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Ready to experience the future of finance?
          </h2>
          <p className='text-lg mb-8'>
            Join thousands of users who trust Neo Wallet for secure, fast, and
            smart transactions.
          </p>
          <Button variant={"default"} size='lg' asChild>
            <Link to='/register'>
              Get Started Now <ArrowRight className='h-5 w-5 ml-2' />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='bg-background py-16'>
        <div className='container mx-auto px-4'>
          <div className='mb-10 text-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-primary'>
              Testimonials
            </h2>
            <p className='mt-2 text-muted-foreground'>What our users say</p>
          </div>
          <Carousel>
            <CarouselContent>
              <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
                <div className='rounded-xl bg-card shadow p-6'>
                  <p className='italic text-muted-foreground'>
                    "Neo Wallet made sending money to my family so easy and
                    secure! Highly recommended."
                  </p>
                  <div className='mt-4 font-semibold text-primary'>
                    — Sarah K.
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
                <div className='rounded-xl bg-card shadow p-6'>
                  <p className='italic text-muted-foreground'>
                    "The analytics feature helped me save more and spend
                    smarter. Love the instant transfers!"
                  </p>
                  <div className='mt-4 font-semibold text-primary'>
                    — Ahmed R.
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
                <div className='rounded-xl bg-card shadow p-6'>
                  <p className='italic text-muted-foreground'>
                    "24/7 support is a lifesaver. The team is always there when
                    I need help."
                  </p>
                  <div className='mt-4 font-semibold text-primary'>
                    — Priya S.
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
                <div className='rounded-xl bg-card shadow p-6'>
                  <p className='italic text-muted-foreground'>
                    "The analytics feature helped me save more and spend
                    smarter. Love the instant transfers!"
                  </p>
                  <div className='mt-4 font-semibold text-primary'>
                    — Ahmed R.
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
                <div className='rounded-xl bg-card shadow p-6'>
                  <p className='italic text-muted-foreground'>
                    "24/7 support is a lifesaver. The team is always there when
                    I need help."
                  </p>
                  <div className='mt-4 font-semibold text-primary'>
                    — Priya S.
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  );
}
