import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className='flex justify-center items-center min-h-[60vh] py-12 bg-background'>
      <Card className='max-w-2xl w-full mx-4'>
        <CardHeader>
          <CardTitle className='text-2xl md:text-3xl font-bold mb-2'>
            Privacy Policy
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6 text-muted-foreground text-base'>
          <section>
            <p>
              At Neo Wallet, your privacy is our top priority. This Privacy
              Policy describes how we collect, use, and safeguard your
              information when you use our digital wallet platform.
            </p>
          </section>
          <section>
            <h2 className='font-semibold text-lg mb-1 text-foreground'>
              Information We Collect
            </h2>
            <ul className='list-disc list-inside ml-4 space-y-1'>
              <li>
                <span className='font-medium text-foreground'>
                  Personal Information:
                </span>{" "}
                Name, email address, phone number, and other registration
                details.
              </li>
              <li>
                <span className='font-medium text-foreground'>
                  Financial Data:
                </span>{" "}
                Wallet balances, transaction history, and linked bank/account
                details.
              </li>
              <li>
                <span className='font-medium text-foreground'>Usage Data:</span>{" "}
                Device information, IP address, browser type, and usage
                patterns.
              </li>
            </ul>
          </section>
          <section>
            <h2 className='font-semibold text-lg mb-1 text-foreground'>
              How We Use Your Information
            </h2>
            <ul className='list-disc list-inside ml-4 space-y-1'>
              <li>
                To provide, operate, and maintain your digital wallet account.
              </li>
              <li>To process transactions and send notifications.</li>
              <li>To improve our services and user experience.</li>
              <li>To comply with legal obligations and prevent fraud.</li>
            </ul>
          </section>
          <section>
            <h2 className='font-semibold text-lg mb-1 text-foreground'>
              How We Protect Your Data
            </h2>
            <ul className='list-disc list-inside ml-4 space-y-1'>
              <li>
                We use industry-standard encryption and security measures.
              </li>
              <li>
                Access to your data is restricted to authorized personnel only.
              </li>
              <li>We regularly review and update our security practices.</li>
            </ul>
          </section>
          <section>
            <h2 className='font-semibold text-lg mb-1 text-foreground'>
              Your Rights & Choices
            </h2>
            <ul className='list-disc list-inside ml-4 space-y-1'>
              <li>
                You can access, update, or delete your personal information at
                any time.
              </li>
              <li>You may opt out of non-essential communications.</li>
              <li>
                Contact our support team for any privacy-related requests.
              </li>
            </ul>
          </section>
          <section>
            <h2 className='font-semibold text-lg mb-1 text-foreground'>
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes through our platform or via
              email.
            </p>
          </section>
          <section>
            <h2 className='font-semibold text-lg mb-1 text-foreground'>
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at{" "}
              <a
                href='mailto:support@neowallet.com'
                className='text-primary underline'
              >
                support@neowallet.com
              </a>
              .
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
