import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function faq() {
  return (
    <>
      <section className='container mx-auto px-4 py-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='mb-6 text-4xl font-bold md:text-5xl'>
            Frequently Asked Questions
          </h1>
          <p className='text-lg text-muted-foreground'>
            Find answers to common questions about Neo Wallet and our services.
          </p>
        </div>
      </section>

      <section className='container mx-auto px-4 pb-20'>
        <div className='mx-auto max-w-3xl'>
          <Accordion type='single' collapsible className='space-y-4'>
            <AccordionItem
              value='item-1'
              className='rounded-lg border border-border bg-card px-6'
            >
              <AccordionTrigger className='text-left'>
                What is Neo Wallet?
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>
                Neo Wallet is a digital wallet platform that allows you to send,
                receive, and manage money securely and instantly. It's designed
                to make financial transactions simple, fast, and accessible to
                everyone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value='item-2'
              className='rounded-lg border border-border bg-card px-6'
            >
              <AccordionTrigger className='text-left'>
                How do I create an account?
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>
                Creating an account is simple. Click on "Get Started" or
                "Register", fill in your details including name, email, phone
                number, and password, choose your account type (Personal or
                Agent), and you're ready to go. Agent accounts require admin
                approval before activation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value='item-3'
              className='rounded-lg border border-border bg-card px-6'
            >
              <AccordionTrigger className='text-left'>
                Is my money safe with Neo Wallet?
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>
                Absolutely. We use bank-level security including military-grade
                encryption, two-factor authentication, and secure servers. Your
                funds are protected 24/7, and we never share your personal
                information without your permission.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value='item-4'
              className='rounded-lg border border-border bg-card px-6'
            >
              <AccordionTrigger className='text-left'>
                What are the transaction fees?
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>
                Adding money to your wallet is free. Sending money costs 1% of
                the transaction amount. Withdrawing money costs 1.5%. Cash-in
                and cash-out through agents may have additional agent
                commissions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value='item-5'
              className='rounded-lg border border-border bg-card px-6'
            >
              <AccordionTrigger className='text-left'>
                How long do transactions take?
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>
                Most transactions are instant. When you send money to another
                Neo Wallet user, it arrives immediately. Bank withdrawals may
                take 1-3 business days depending on your bank.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value='item-6'
              className='rounded-lg border border-border bg-card px-6'
            >
              <AccordionTrigger className='text-left'>
                What is an Agent account?
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>
                Agent accounts are for service providers who help users cash-in
                and cash-out. Agents earn commissions on transactions they
                facilitate. To become an agent, register with an Agent account
                type and wait for admin approval.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value='item-7'
              className='rounded-lg border border-border bg-card px-6'
            >
              <AccordionTrigger className='text-left'>
                How do I add money to my wallet?
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>
                You can add money through bank transfer, debit/credit card, or
                via a Neo Wallet agent. Simply go to your dashboard, click "Add
                Money", choose your preferred method, and follow the
                instructions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value='item-8'
              className='rounded-lg border border-border bg-card px-6'
            >
              <AccordionTrigger className='text-left'>
                Can I cancel a transaction?
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>
                Once a transaction is completed, it cannot be cancelled as
                transfers are instant. However, you can request a refund from
                the recipient. If you believe a transaction was made in error or
                fraudulently, contact our support team immediately.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value='item-9'
              className='rounded-lg border border-border bg-card px-6'
            >
              <AccordionTrigger className='text-left'>
                What if I forget my password?
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>
                You can reset your password from the login page by clicking
                "Forgot Password". We'll send you a secure link to create a new
                password. Make sure to use a strong, unique password for your
                account security.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value='item-10'
              className='rounded-lg border border-border bg-card px-6'
            >
              <AccordionTrigger className='text-left'>
                How do I contact customer support?
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>
                Our support team is available 24/7. You can reach us via email
                at support@neowallet.com, call us at +1 (555) 123-4567, or use
                the contact form on our Contact page. We typically respond
                within a few hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
