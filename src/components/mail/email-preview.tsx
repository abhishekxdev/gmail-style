'use client';

import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Tag,
  List,
  Trash2,
  MoreHorizontal,
  Reply,
  Archive,
  FileText,
  Check,
} from 'lucide-react';
import { Email } from '@/lib/mail-data';

interface EmailPreviewProps {
  email: Email | null;
}

export function EmailPreview({ email }: EmailPreviewProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (!email) {
    return (
      <div className="flex h-full items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-sm text-[#9ca3af]">
            Select an email to view
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Header with Actions */}
      <div className="flex items-center justify-between border-b border-[#e5e7eb] px-6 py-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src={email.from.avatar} alt={email.from.name} />
            <AvatarFallback className="text-sm font-medium">
              {getInitials(email.from.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#111827]">
                {email.from.name}
              </span>
              {email.starred && (
                <Check className="h-4 w-4 text-[#3b82f6]" />
              )}
            </div>
            <div className="text-xs text-[#6b7280]">
              {email.from.email}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6b7280]">
            <Tag className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6b7280]">
            <List className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6b7280]">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6b7280]">
            <Reply className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6b7280]">
            <Archive className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6b7280]">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Email Content */}
      <div className="flex-1 overflow-auto">
        <div className="px-6 py-6">
          {/* Subject */}
          <h1 className="mb-6 text-2xl font-semibold text-[#111827]">
            {email.subject}
          </h1>

          {/* Metadata */}
          <div className="mb-6 text-sm text-[#6b7280]">
            Hi Team, We&apos;re refining our product and need you...
          </div>

          {/* Body */}
          <div className="prose max-w-none">
            <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-[#374151]">
              {email.body}
            </p>
          </div>

          {/* Attachment */}
          {email.hasAttachment && (
            <div className="mt-8">
              <div className="mb-2 text-sm font-medium text-[#111827]">
                Attachment
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-[#e5e7eb] p-3 hover:bg-[#f9fafb]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ef4444]">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-[#111827]">
                    designpr.pptx
                  </div>
                  <div className="text-xs text-[#6b7280]">2 MB</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
