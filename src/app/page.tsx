'use client';

import * as React from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { LeftNav } from '@/components/mail/left-nav';
import { Sidebar } from '@/components/mail/sidebar';
import { EmailList } from '@/components/mail/email-list';
import { EmailPreview } from '@/components/mail/email-preview';
import { ComposeDialog } from '@/components/mail/compose-dialog';
import { emailsByFolder, mockEmails } from '@/lib/mail-data';

export default function MailPage() {
  const [selectedFolder, setSelectedFolder] = React.useState('inbox');
  const [selectedEmailId, setSelectedEmailId] = React.useState<string | null>(null);
  const [composeOpen, setComposeOpen] = React.useState(false);

  // Get emails for the selected folder
  const emails = emailsByFolder[selectedFolder] || mockEmails;
  const selectedEmail = emails.find((email) => email.id === selectedEmailId) || null;

  // Reset selected email when changing folders
  React.useEffect(() => {
    setSelectedEmailId(null);
  }, [selectedFolder]);

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left Icon Navigation */}
      <LeftNav />

      {/* Main Sidebar */}
      <div className="w-72 flex-shrink-0">
        <Sidebar
          selectedFolder={selectedFolder}
          onSelectFolder={setSelectedFolder}
          onCompose={() => setComposeOpen(true)}
        />
      </div>

      {/* Resizable Email Content */}
      <ResizablePanelGroup 
        orientation="horizontal" 
        className="flex-1"
      >
        {/* Email List */}
        <ResizablePanel 
          defaultSize={selectedEmailId ? 45 : 100} 
          minSize={35}
          id="email-list"
        >
          <EmailList
            emails={emails}
            selectedEmailId={selectedEmailId}
            onSelectEmail={setSelectedEmailId}
          />
        </ResizablePanel>

        {/* Email Preview - Only show when an email is selected */}
        {selectedEmailId && (
          <>
            <ResizableHandle withHandle />
            <ResizablePanel 
              defaultSize={55} 
              minSize={40}
              id="email-preview"
            >
              <EmailPreview email={selectedEmail} />
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>

      <ComposeDialog open={composeOpen} onOpenChange={setComposeOpen} />
    </div>
  );
}
