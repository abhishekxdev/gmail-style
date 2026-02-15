'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Filter, 
  ListOrdered, 
  Check,
  Inbox,
} from 'lucide-react';
import { Email } from '@/lib/mail-data';
import { format } from 'date-fns';

interface EmailListProps {
  emails: Email[];
  selectedEmailId: string | null;
  onSelectEmail: (emailId: string) => void;
}

const tabs = [
  { id: 'all', label: 'All', badge: 7 },
  { id: 'focused', label: 'Focused', badge: null },
  { id: 'others', label: 'Others', badge: null },
];

export function EmailList({ emails, selectedEmailId, onSelectEmail }: EmailListProps) {
  const [selectedTab, setSelectedTab] = React.useState('all');

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatTime = (date: Date) => {
    return format(date, 'HH:mm');
  };

  const formatShortDate = (date: Date) => {
    const today = new Date();
    const diffDays = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return formatTime(date);
    } else if (diffDays < 7) {
      return format(date, 'MMM dd');
    }
    return format(date, 'MMM dd');
  };

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Header */}
      <div className="border-b border-[#e5e7eb] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Inbox className="h-5 w-5 text-[#111827]" />
            <h1 className="text-xl font-semibold text-[#111827]">Inbox</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6b7280]">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6b7280]">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6b7280]">
              <ListOrdered className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-4 flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors relative',
                selectedTab === tab.id
                  ? 'text-[#111827]'
                  : 'text-[#6b7280] hover:text-[#111827]'
              )}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ef4444] text-xs font-semibold text-white">
                  {tab.badge}
                </span>
              )}
              {selectedTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#111827]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Email List */}
      <div className="flex-1 overflow-auto">
        {emails.map((email) => {
          const isSelected = selectedEmailId === email.id;
          
          return (
            <div
              key={email.id}
              onClick={() => onSelectEmail(email.id)}
              className={cn(
                'group flex cursor-pointer items-start gap-3 border-b border-[#f3f4f6] px-6 py-2.5 transition-colors hover:bg-[#f9fafb]',
                isSelected && 'bg-[#f3f4f6]'
              )}
            >
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src={email.from.avatar} alt={email.from.name} />
                <AvatarFallback className="text-xs font-medium">
                  {getInitials(email.from.name)}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                <div className="mb-0.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      'text-sm',
                      !email.read ? 'font-semibold text-[#111827]' : 'font-medium text-[#374151]'
                    )}>
                      {email.from.name}
                    </span>
                    {email.starred && (
                      <Check className="h-3.5 w-3.5 text-[#3b82f6]" />
                    )}
                  </div>
                  <span className="flex-shrink-0 text-xs text-[#9ca3af]">
                    {formatShortDate(email.date)}
                  </span>
                </div>

                <div className={cn(
                  'mb-0.5 text-sm',
                  !email.read ? 'font-semibold text-[#111827]' : 'font-normal text-[#111827]'
                )}>
                  {email.subject}
                </div>

                <div className="text-xs text-[#6b7280] line-clamp-1">
                  {email.preview}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
