
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
//     toast({
//       title: "Message Sent!",
//       description:
//         "Thank you for contacting us. We'll get back to you within 24 hours.",
//     });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className='min-h-screen'>

      <section className='container mx-auto px-4 py-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='mb-6 text-4xl font-bold md:text-5xl'>Get in Touch</h1>
          <p className='text-lg text-muted-foreground'>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className='container mx-auto px-4 pb-20'>
        <div className='grid gap-8 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='grid gap-4 md:grid-cols-2'>
                    <div className='space-y-2'>
                      <Label htmlFor='name'>Name</Label>
                      <Input
                        id='name'
                        placeholder='Your name'
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='email'>Email</Label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='your@email.com'
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='subject'>Subject</Label>
                    <Input
                      id='subject'
                      placeholder='What is this about?'
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='message'>Message</Label>
                    <Textarea
                      id='message'
                      placeholder='Tell us more...'
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button type='submit' className='w-full'>
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Mail className='h-5 w-5 text-primary' />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  support@neowallet.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Phone className='h-5 w-5 text-primary' />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  +1 (555) 123-4567
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <MapPin className='h-5 w-5 text-primary' />
                  Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  123 Finance Street
                  <br />
                  San Francisco, CA 94102
                  <br />
                  United States
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
