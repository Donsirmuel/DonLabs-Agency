import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 id="contact-heading" className="text-4xl font-bold mb-4">Hire Samuel Olaonipekun - Django Developer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to contribute to impactful Django projects? Available for hire in Lagos, Nigeria and remote work. Let's discuss web development opportunities and how I can bring value to your team with Python expertise.
            </p>
          </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Actively seeking opportunities to contribute to impactful projects and grow within a forward-thinking team. 
                Ready to bring reliability, problem-solving skills, and Django expertise to make a measurable difference.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 hover-lift rounded-lg p-2 -m-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">Samuelolaonipekun050@Outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 hover-lift rounded-lg p-2 -m-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-muted-foreground">github.com/Donsirmuel</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 hover-lift rounded-lg p-2 -m-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-muted-foreground">linkedin.com/in/samuel-olaonipekun</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 hover-lift rounded-lg p-2 -m-2">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-muted-foreground">+234 915 099 6465</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 hover-lift rounded-lg p-2 -m-2">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Send className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Twitter</p>
                  <p className="text-muted-foreground">@_donsirmuel</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 hover-lift rounded-lg p-2 -m-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;