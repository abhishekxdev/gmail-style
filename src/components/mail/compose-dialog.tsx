'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Paperclip, Smile, AtSign, X } from 'lucide-react';

interface ComposeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ComposeDialog({ open, onOpenChange }: ComposeDialogProps) {
  const [to, setTo] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [body, setBody] = React.useState('');

  const handleSend = () => {
    // Handle send email
    console.log('Sending email:', { to, subject, body });
    onOpenChange(false);
    // Reset form
    setTo('');
    setSubject('');
    setBody('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl gap-0 p-0 sm:rounded-2xl [&>button]:hidden">
        <DialogHeader className="flex flex-row items-center justify-between border-b border-[#e5e7eb] px-6 py-4">
          <DialogTitle className="text-lg font-semibold text-[#111827]">
            New Message
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-[#6b7280] hover:bg-[#f3f4f6] hover:text-[#111827]"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-0">
          <div className="border-b border-[#f3f4f6] px-6 py-3">
            <Input
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="h-9 border-0 px-0 text-sm text-[#111827] placeholder:text-[#9ca3af] focus-visible:ring-0"
            />
          </div>

          <div className="border-b border-[#f3f4f6] px-6 py-3">
            <Input
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="h-9 border-0 px-0 text-sm text-[#111827] placeholder:text-[#9ca3af] focus-visible:ring-0"
            />
          </div>

          <div className="px-6 py-4">
            <Textarea
              placeholder="Write your message..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="min-h-[320px] resize-none border-0 px-0 text-sm text-[#111827] placeholder:text-[#9ca3af] focus-visible:ring-0"
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#e5e7eb] px-6 py-4">
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSend}
              className="h-9 rounded-lg bg-[#111827] px-4 text-sm font-medium text-white hover:bg-[#1f2937]"
            >
              <Send className="mr-2 h-4 w-4" />
              Send
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-[#6b7280] hover:bg-[#f3f4f6] hover:text-[#111827]"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-[#6b7280] hover:bg-[#f3f4f6] hover:text-[#111827]"
            >
              <Smile className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-[#6b7280] hover:bg-[#f3f4f6] hover:text-[#111827]"
            >
              <AtSign className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
