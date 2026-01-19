import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className='flex justify-center items-center min-h-[60vh] py-12 bg-background'>
      <Card className='max-w-2xl w-full mx-4'>
        <CardHeader>
          <CardTitle className='text-2xl md:text-3xl font-bold mb-2'>
            Terms of Service
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6 text-muted-foreground text-base'>
          <section>
            <p>
              Welcome to Neo Wallet. By accessing or using our digital wallet
              platform, you agree to comply with and be bound by the following
              terms and conditions. Please read them carefully.
            </p>
          </section>
          <section>
            <h2 className='font-semibold text-lg mb-1 text-foreground'>
              1. Use of Service
            </h2>
            <ul className='list-disc list-inside ml-4 space-y-1'>
              <li>
                You must be at least 18 years old or the legal age in your
                jurisdiction to use Neo Wallet.
              </li>
              <li>
                You agree to provide accurate and complete information during
                registration and to keep your account information updated.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
            </ul>
          </section>
          <section>
            <h2 className='font-semibold text-lg mb-1 text-foreground'>
              2. Prohibited Activities
            </h2>
            <ul className='list-disc list-inside ml-4 space-y-1'>
              <li>
                Using the platform for any unlawful, fraudulent, or malicious
                activities.
              </li>
              <li>
                Attempting to gain unauthorized access to other accounts or
                systems.
              </li>
              <li>Transmitting viruses, malware, or any harmful code.</li>
            </ul>
          </section>
          <section>
            <h2 className='font-semibold text-lg mb-1 text-foreground'>
              3. Transactions
            </h2>
            <ul className='list-disc list-inside ml-4 space-y-1'>
              <li>
                All transactions are subject to verification and may be delayed
                or declined if suspicious activity is detected.
              </li>
              <li>
                Neo Wallet is not responsible for losses due to incorrect
                transaction details provided by the user.
              </li>
              <li>
                Fees may apply to certain transactions and will be disclosed
                prior to completion.
              </li>
            </ul>
          </section>
          <section>
            <h2 className='font-semibold text-lg mb-1 text-foreground'>
              4. Account Termination
            </h2>
            <ul className='list-disc list-inside ml-4 space-y-1'>
              <li>
                We reserve the right to suspend or terminate your account for
                violations of these terms or suspicious activity.
              </li>
              <li>
                You may close your account at any time by contacting support.
              </li>
            </ul>
          </section>
          <section>
            <h2 className='font-semibold text-lg mb-1 text-foreground'>
              5. Limitation of Liability
            </h2>
            <ul className='list-disc list-inside ml-4 space-y-1'>
              <li>
                Neo Wallet is provided "as is" without warranties of any kind.
              </li>
              <li>
                We are not liable for any indirect, incidental, or consequential
                damages arising from your use of the platform.
              </li>
            </ul>
          </section>
          <section>
            <h2 className='font-semibold text-lg mb-1 text-foreground'>
              6. Changes to Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. Continued
              use of Neo Wallet after changes constitutes acceptance of the new
              terms.
            </p>
          </section>
          <section>
            <h2 className='font-semibold text-lg mb-1 text-foreground'>
              7. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{" "}
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

export default TermsOfService;
