'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  Search,
  Plus,
  Users,
  Building2,
  Settings,
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  Camera,
  Zap,
  TrendingUp,
} from 'lucide-react';

const navItems = [
  { icon: Sparkles, label: 'AI' },
  { icon: Search, label: 'Search' },
  { icon: Plus, label: 'Create' },
  { icon: Users, label: 'People' },
  { icon: Building2, label: 'Organization' },
  { icon: Settings, label: 'Settings' },
];

const bottomItems = [
  { icon: Mail, label: 'Mail', active: true },
  { icon: Phone, label: 'Phone' },
  { icon: Calendar, label: 'Calendar' },
  { icon: MessageSquare, label: 'Messages' },
  { icon: Camera, label: 'Meet' },
  { icon: Zap, label: 'Integrations' },
  { icon: TrendingUp, label: 'Analytics' },
];

export function LeftNav() {
  return (
    <nav className="flex h-full w-20 flex-col items-center border-r bg-[#fafafa] py-6">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Top Navigation */}
      <div className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-[#6b7280] hover:bg-[#f1f5f9] hover:text-[#1f2937]"
          >
            <item.icon className="h-5 w-5" />
          </Button>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom Navigation */}
      <div className="flex flex-col gap-2">
        {bottomItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            size="icon"
            className={cn(
              'h-10 w-10 text-[#6b7280] hover:bg-[#f1f5f9] hover:text-[#1f2937]',
              item.active && 'bg-[#f1f5f9] text-[#1f2937]'
            )}
          >
            <item.icon className="h-5 w-5" />
          </Button>
        ))}
      </div>
    </nav>
  );
}
