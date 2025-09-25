import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CustomQuoteModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const submit = () => {
    const msg = `Hi Samuel, my name is ${name || 'N/A'}. Email: ${email || 'N/A'}. Project details: ${details || 'N/A'}. Please send a custom quote.`;
    const url = 'https://wa.me/2349150996465?text=' + encodeURIComponent(msg);
    window.open(url, '_blank');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Request custom quote</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request a custom quote</DialogTitle>
          <DialogDescription>Please provide a few details and I'll reply with an estimate.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-2">
          <label className="text-sm">Name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          <label className="text-sm">Email</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
          <label className="text-sm">Project details</label>
          <Textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Briefly describe your project" />
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={submit}>Send via WhatsApp</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomQuoteModal;
