'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Inbox,
  Github,
  Mail,
  Send,
  Star,
  FileText,
  AlertCircle,
  Trash2,
  Plus,
  Settings,
  MessageSquare,
  LucideIcon,
} from 'lucide-react';

interface ViewItem {
  id: string;
  name: string;
  icon: LucideIcon;
  count?: number;
  logo?: string;
}

const views: ViewItem[] = [
  { id: 'inbox', name: 'Inbox', icon: Inbox, count: 99 },
  { id: 'github', name: 'GitHub', icon: Github, count: 43 },
  { id: 'clickup', name: 'ClickUp', icon: Star, count: 99 },
  { id: 'cal', name: 'Cal.com', icon: Mail, count: 87 },
  { id: 'notion', name: 'Notion', icon: FileText, count: 12 },
  { id: 'slack', name: 'Slack', icon: MessageSquare, count: 256 },
  { id: 'linear', name: 'Linear', icon: AlertCircle, count: 34 },
  { id: 'stripe', name: 'Stripe', icon: Mail, count: 8 },
];

const mailItems: ViewItem[] = [
  { id: 'all', name: 'All mail', icon: Mail },
  { id: 'sent', name: 'Sent', icon: Send },
  { id: 'favorites', name: 'Favorites', icon: Star },
  { id: 'drafts', name: 'Drafts', icon: FileText },
  { id: 'spam', name: 'Spam', icon: AlertCircle },
  { id: 'trash', name: 'Trash', icon: Trash2 },
];

const otherItems: ViewItem[] = [
  { id: 'settings', name: 'Mail settings', icon: Settings },
  { id: 'feedback', name: 'Feedback', icon: MessageSquare },
  { id: 'rating', name: 'Rating', icon: Star },
];

interface SidebarProps {
  selectedFolder: string;
  onSelectFolder: (folderId: string) => void;
  onCompose: () => void;
}

export function Sidebar({ selectedFolder, onSelectFolder, onCompose }: SidebarProps) {
  return (
    <div className="flex h-full flex-col bg-white border-r border-[#e5e7eb]">
      <div className="p-6 pb-4">
        <h2 className="text-2xl font-semibold text-[#111827] mb-4">Emails</h2>
        <Button
          onClick={onCompose}
          className="w-full h-11 rounded-lg bg-[#111827] hover:bg-[#1f2937] text-white font-medium"
          size="default"
        >
          <Mail className="mr-2 h-4 w-4" />
          Compose
        </Button>
      </div>

      <ScrollArea className="flex-1 px-4">
        {/* VIEWS Section */}
        <div className="mb-6">
          <div className="mb-2 px-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#6b7280]">
              VIEWS
            </span>
          </div>
          <div className="space-y-0.5">
            {views.map((view) => {
              const Icon = view.icon;
              const isSelected = selectedFolder === view.id;
              return (
                <button
                  key={view.id}
                  onClick={() => onSelectFolder(view.id)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                    isSelected
                      ? 'bg-[#f3f4f6] text-[#111827] font-medium'
                      : 'text-[#6b7280] hover:bg-[#f9fafb] hover:text-[#111827]'
                  )}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="flex-1 text-left">{view.name}</span>
                  {view.count !== undefined && (
                    <span className="text-xs text-[#9ca3af]">
                      {view.count > 99 ? '99+' : view.count}
                    </span>
                  )}
                </button>
              );
            })}
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#9ca3af] transition-colors hover:bg-[#f9fafb] hover:text-[#6b7280]">
              <Plus className="h-4 w-4 flex-shrink-0" />
              <span className="flex-1 text-left">Add view</span>
            </button>
          </div>
        </div>

        {/* MAIL Section */}
        <div className="mb-6">
          <div className="mb-2 px-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#6b7280]">
              MAIL
            </span>
          </div>
          <div className="space-y-0.5">
            {mailItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectFolder(item.id)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#6b7280] transition-colors hover:bg-[#f9fafb] hover:text-[#111827]"
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="flex-1 text-left">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* OTHERS Section */}
        <div className="mb-6">
          <div className="mb-2 px-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#6b7280]">
              OTHERS
            </span>
          </div>
          <div className="space-y-0.5">
            {otherItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#6b7280] transition-colors hover:bg-[#f9fafb] hover:text-[#111827]"
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="flex-1 text-left">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
