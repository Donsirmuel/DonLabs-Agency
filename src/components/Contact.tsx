import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next Django project? Let's discuss how I can help build your backend.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in discussing new Django projects, backend challenges, 
                or opportunities to collaborate on full-stack applications.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-muted-foreground">github.com/yourusername</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-muted-foreground">linkedin.com/in/yourprofile</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Your City, Country</p>
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