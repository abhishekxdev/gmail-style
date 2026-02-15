'use client';

import * as React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Menu, 
  HelpCircle, 
  Settings,
  Grid3x3,
} from 'lucide-react';

export function Header() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <header className="flex h-16 items-center gap-4 border-b bg-white px-4">
      {/* Left: Menu & Logo */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <span className="text-xl font-normal text-[#5f6368]">Mail</span>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="mx-auto flex w-full max-w-2xl items-center">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search mail"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12 w-full rounded-full bg-[#f1f3f4] pl-12 pr-4 text-sm focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[#1a73e8]"
          />
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-10 w-10 text-[#5f6368]">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-10 w-10 text-[#5f6368]">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-10 w-10 text-[#5f6368]">
          <Grid3x3 className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://i.pravatar.cc/150?u=user" alt="User" />
          <AvatarFallback className="text-sm">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
