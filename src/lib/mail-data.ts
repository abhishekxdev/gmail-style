export interface Email {
  id: string;
  from: {
    name: string;
    email: string;
    avatar?: string;
  };
  subject: string;
  preview: string;
  body: string;
  date: Date;
  read: boolean;
  starred: boolean;
  labels: string[];
  hasAttachment?: boolean;
}

export interface Folder {
  id: string;
  name: string;
  icon: string;
  count?: number;
}

export const folders: Folder[] = [
  { id: 'inbox', name: 'Inbox', icon: 'inbox', count: 12 },
  { id: 'starred', name: 'Starred', icon: 'star', count: 4 },
  { id: 'sent', name: 'Sent', icon: 'send' },
  { id: 'drafts', name: 'Drafts', icon: 'file-text', count: 2 },
  { id: 'archive', name: 'Archive', icon: 'archive' },
  { id: 'trash', name: 'Trash', icon: 'trash-2' },
];

export const labels = [
  { id: 'work', name: 'Work', color: 'bg-blue-500' },
  { id: 'personal', name: 'Personal', color: 'bg-green-500' },
  { id: 'important', name: 'Important', color: 'bg-red-500' },
  { id: 'todo', name: 'To Do', color: 'bg-yellow-500' },
];

export const mockEmails: Email[] = [
  {
    id: '1',
    from: {
      name: 'Sarah Chen',
      email: 'sarah.chen@linear.app',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
    },
    subject: 'Q1 Planning Review',
    preview: 'Hey team, I wanted to share the Q1 roadmap and get your feedback...',
    body: `Hey team,

I wanted to share the Q1 roadmap and get your feedback on the proposed features and timeline.

Please review the attached document and let me know your thoughts by EOD Friday.

Best,
Sarah`,
    date: new Date('2026-02-15T09:30:00'),
    read: false,
    starred: true,
    labels: ['work', 'important'],
    hasAttachment: true,
  },
  {
    id: '2',
    from: {
      name: 'Marcus Rodriguez',
      email: 'marcus@company.com',
      avatar: 'https://i.pravatar.cc/150?u=marcus',
    },
    subject: 'Design System Updates',
    preview: 'The new component library is ready for review. Check out the updated...',
    body: `Hi everyone,

The new component library is ready for review. Check out the updated documentation and let me know if you have any questions.

We've added several new components including:
- Navigation menus
- Data tables
- Form inputs
- Modals

Looking forward to your feedback!

Marcus`,
    date: new Date('2026-02-15T08:15:00'),
    read: false,
    starred: false,
    labels: ['work'],
  },
  {
    id: '3',
    from: {
      name: 'Emily Watson',
      email: 'emily.watson@startup.io',
      avatar: 'https://i.pravatar.cc/150?u=emily',
    },
    subject: 'Coffee catch-up?',
    preview: "It's been a while! Would love to catch up over coffee next week...",
    body: `Hey!

It's been a while! Would love to catch up over coffee next week and hear about your new project.

Are you free on Tuesday or Wednesday afternoon?

Cheers,
Emily`,
    date: new Date('2026-02-14T16:45:00'),
    read: true,
    starred: false,
    labels: ['personal'],
  },
  {
    id: '4',
    from: {
      name: 'Alex Thompson',
      email: 'alex@design.co',
      avatar: 'https://i.pravatar.cc/150?u=alex',
    },
    subject: 'Invoice #2024-02-001',
    preview: 'Please find attached the invoice for February services...',
    body: `Hi,

Please find attached the invoice for February services.

Payment is due within 30 days. Let me know if you have any questions.

Best regards,
Alex`,
    date: new Date('2026-02-14T14:20:00'),
    read: true,
    starred: false,
    labels: ['work'],
    hasAttachment: true,
  },
  {
    id: '5',
    from: {
      name: 'Taylor Kim',
      email: 'taylor@acme.com',
      avatar: 'https://i.pravatar.cc/150?u=taylor',
    },
    subject: 'Re: Project Timeline',
    preview: 'Thanks for the update. The timeline looks good overall, but I have...',
    body: `Hi,

Thanks for the update. The timeline looks good overall, but I have a few concerns about the Q2 deliverables.

Can we schedule a quick call to discuss?

Taylor`,
    date: new Date('2026-02-13T11:30:00'),
    read: true,
    starred: true,
    labels: ['work', 'important'],
  },
  {
    id: '6',
    from: {
      name: 'Jordan Lee',
      email: 'jordan@newsletter.com',
      avatar: 'https://i.pravatar.cc/150?u=jordan',
    },
    subject: 'Weekly Design Digest',
    preview: 'This week: Minimalist interfaces, color theory, and accessibility tips...',
    body: `This week's highlights:

- Minimalist interfaces that work
- Understanding color theory in UI design
- Top 10 accessibility tips for designers

Happy reading!

Jordan`,
    date: new Date('2026-02-12T08:00:00'),
    read: true,
    starred: false,
    labels: [],
  },
  {
    id: '7',
    from: {
      name: 'David Park',
      email: 'david@techstartup.io',
      avatar: 'https://i.pravatar.cc/150?u=david',
    },
    subject: 'Meeting Notes - Product Strategy',
    preview: 'Here are the key takeaways from today\'s product strategy meeting...',
    body: `Team,

Here are the key takeaways from today's product strategy meeting:
- Focus on mobile-first design
- Implement A/B testing framework
- Launch beta by March 15th

Let me know if you have questions.

David`,
    date: new Date('2026-02-12T15:20:00'),
    read: true,
    starred: false,
    labels: ['work'],
  },
  {
    id: '8',
    from: {
      name: 'Lisa Martinez',
      email: 'lisa@agency.com',
      avatar: 'https://i.pravatar.cc/150?u=lisa',
    },
    subject: 'Client Presentation Deck',
    preview: 'Attached is the final presentation deck for the client meeting tomorrow...',
    body: `Hi,

Attached is the final presentation deck for the client meeting tomorrow.

I've incorporated all the feedback from yesterday's review.

Best,
Lisa`,
    date: new Date('2026-02-11T17:30:00'),
    read: true,
    starred: true,
    labels: ['work'],
    hasAttachment: true,
  },
  {
    id: '9',
    from: {
      name: 'Kevin O\'Brien',
      email: 'kevin@devteam.io',
      avatar: 'https://i.pravatar.cc/150?u=kevin',
    },
    subject: 'Sprint Retrospective',
    preview: 'Let\'s schedule our sprint retrospective for this Friday at 2 PM...',
    body: `Team,

Let's schedule our sprint retrospective for this Friday at 2 PM.

Please come prepared with:
- What went well
- What could be improved
- Action items for next sprint

Kevin`,
    date: new Date('2026-02-11T10:15:00'),
    read: false,
    starred: false,
    labels: ['work'],
  },
  {
    id: '10',
    from: {
      name: 'Rachel Green',
      email: 'rachel@marketing.co',
      avatar: 'https://i.pravatar.cc/150?u=rachel',
    },
    subject: 'Campaign Performance Report',
    preview: 'Our latest campaign exceeded expectations! Here\'s the full breakdown...',
    body: `Great news!

Our latest campaign exceeded expectations with:
- 45% increase in engagement
- 2.3x ROI
- 12,000 new leads

Full report attached.

Rachel`,
    date: new Date('2026-02-10T14:45:00'),
    read: true,
    starred: true,
    labels: ['work'],
    hasAttachment: true,
  },
  {
    id: '11',
    from: {
      name: 'Michael Zhang',
      email: 'michael@consultancy.com',
      avatar: 'https://i.pravatar.cc/150?u=michael',
    },
    subject: 'Proposal Review',
    preview: 'I\'ve reviewed your proposal and have some feedback to share...',
    body: `Hi,

I've reviewed your proposal and have some feedback to share.

Overall it looks great, but I suggest revising the pricing section and adding more case studies.

Can we meet this week?

Michael`,
    date: new Date('2026-02-10T09:20:00'),
    read: true,
    starred: false,
    labels: ['work'],
  },
  {
    id: '12',
    from: {
      name: 'Sophia Turner',
      email: 'sophia@creativeagency.io',
      avatar: 'https://i.pravatar.cc/150?u=sophia',
    },
    subject: 'Brand Guidelines v2.0',
    preview: 'The updated brand guidelines are now available in the shared folder...',
    body: `Team,

The updated brand guidelines are now available in the shared folder.

Key changes:
- New color palette
- Typography updates
- Logo variations

Please review by end of week.

Sophia`,
    date: new Date('2026-02-09T16:00:00'),
    read: true,
    starred: false,
    labels: ['work'],
    hasAttachment: true,
  },
  {
    id: '13',
    from: {
      name: 'James Wilson',
      email: 'james@finance.co',
      avatar: 'https://i.pravatar.cc/150?u=james',
    },
    subject: 'Q4 Budget Review',
    preview: 'Please find attached the Q4 budget review and projections for Q1...',
    body: `Hi,

Please find attached the Q4 budget review and projections for Q1.

We need to discuss the allocation for marketing and R&D.

Let me know when you're available.

James`,
    date: new Date('2026-02-09T11:30:00'),
    read: false,
    starred: false,
    labels: ['work'],
    hasAttachment: true,
  },
  {
    id: '14',
    from: {
      name: 'Amanda Foster',
      email: 'amanda@hrteam.com',
      avatar: 'https://i.pravatar.cc/150?u=amanda',
    },
    subject: 'Team Building Event',
    preview: 'Save the date! Our team building event is scheduled for March 5th...',
    body: `Hi everyone,

Save the date! Our team building event is scheduled for March 5th.

We'll be doing an escape room followed by dinner.

RSVP by Feb 20th please!

Amanda`,
    date: new Date('2026-02-08T13:15:00'),
    read: true,
    starred: false,
    labels: ['personal'],
  },
  {
    id: '15',
    from: {
      name: 'Chris Anderson',
      email: 'chris@partnerships.io',
      avatar: 'https://i.pravatar.cc/150?u=chris',
    },
    subject: 'Partnership Opportunity',
    preview: 'I wanted to reach out about a potential partnership between our companies...',
    body: `Hello,

I wanted to reach out about a potential partnership between our companies.

I think there's great synergy and would love to explore this further.

Are you available for a call next week?

Best,
Chris`,
    date: new Date('2026-02-08T10:00:00'),
    read: true,
    starred: true,
    labels: ['work'],
  },
];

export const githubEmails: Email[] = [
  {
    id: 'gh1',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[project/repo] New pull request #234',
    preview: 'John Doe opened a new pull request: Add dark mode support...',
    body: `John Doe opened a pull request in project/repo

Title: Add dark mode support

This PR implements dark mode across the entire application using CSS variables and theme context.

View the pull request on GitHub.`,
    date: new Date('2026-02-15T10:22:00'),
    read: false,
    starred: false,
    labels: ['github'],
  },
  {
    id: 'gh2',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[project/api] Issue closed #189',
    preview: 'Sarah Chen closed issue: API endpoint returning 500 error...',
    body: `Sarah Chen closed an issue in project/api

Issue #189: API endpoint returning 500 error

The issue has been resolved by fixing the database query timeout.`,
    date: new Date('2026-02-15T09:15:00'),
    read: false,
    starred: true,
    labels: ['github'],
  },
  {
    id: 'gh3',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[security] Dependabot alert #12',
    preview: 'Security vulnerability detected in dependencies...',
    body: `Dependabot has detected a security vulnerability in your dependencies.

Package: lodash
Current version: 4.17.20
Fixed version: 4.17.21

Please update as soon as possible.`,
    date: new Date('2026-02-14T16:30:00'),
    read: true,
    starred: false,
    labels: ['github', 'security'],
  },
  {
    id: 'gh4',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[frontend/ui] PR merged #456',
    preview: 'Marcus Rodriguez merged pull request: Update button components...',
    body: `Marcus Rodriguez merged a pull request in frontend/ui

PR #456: Update button components

All button components have been updated to use the new design system.`,
    date: new Date('2026-02-14T14:10:00'),
    read: true,
    starred: false,
    labels: ['github'],
  },
  {
    id: 'gh5',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[backend/core] New issue #567',
    preview: 'Emily Watson opened an issue: Database connection pooling...',
    body: `Emily Watson opened an issue in backend/core

Issue #567: Implement database connection pooling

We need to implement connection pooling to improve database performance.`,
    date: new Date('2026-02-14T11:25:00'),
    read: true,
    starred: false,
    labels: ['github'],
  },
  {
    id: 'gh6',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[docs/wiki] PR review requested #89',
    preview: 'You were requested to review: Update API documentation...',
    body: `You were requested to review a pull request in docs/wiki

PR #89: Update API documentation

Please review the updated API documentation and provide feedback.`,
    date: new Date('2026-02-13T16:40:00'),
    read: false,
    starred: true,
    labels: ['github'],
  },
  {
    id: 'gh7',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[mobile/app] Release v2.3.0',
    preview: 'A new release has been published: Version 2.3.0...',
    body: `A new release has been published in mobile/app

Version 2.3.0

New features:
- Offline mode support
- Performance improvements
- Bug fixes`,
    date: new Date('2026-02-13T13:20:00'),
    read: true,
    starred: false,
    labels: ['github'],
  },
  {
    id: 'gh8',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[security] Dependabot alert #13',
    preview: 'High severity vulnerability in axios...',
    body: `Dependabot has detected a high severity vulnerability in your dependencies.

Package: axios
Current version: 0.21.1
Fixed version: 0.21.2

Please update immediately.`,
    date: new Date('2026-02-13T09:00:00'),
    read: false,
    starred: true,
    labels: ['github', 'security'],
  },
  {
    id: 'gh9',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[project/tests] CI/CD pipeline failed',
    preview: 'Build failed on main branch...',
    body: `Your CI/CD pipeline failed on the main branch.

Error: Unit tests failed in auth module.

View logs on GitHub Actions.`,
    date: new Date('2026-02-12T18:30:00'),
    read: true,
    starred: false,
    labels: ['github'],
  },
  {
    id: 'gh10',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[frontend/components] New discussion #45',
    preview: 'Alex Thompson started a discussion: Component library roadmap...',
    body: `Alex Thompson started a discussion in frontend/components

Topic: Component library roadmap for Q2

Let's discuss the priorities for our component library in Q2.`,
    date: new Date('2026-02-12T15:10:00'),
    read: true,
    starred: false,
    labels: ['github'],
  },
  {
    id: 'gh11',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[backend/api] PR approved #890',
    preview: 'Taylor Kim approved your pull request: Add rate limiting...',
    body: `Taylor Kim approved your pull request in backend/api

PR #890: Add rate limiting

Looks good! Ready to merge.`,
    date: new Date('2026-02-12T11:45:00'),
    read: true,
    starred: true,
    labels: ['github'],
  },
  {
    id: 'gh12',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[infra/terraform] New commit on main',
    preview: 'Jordan Lee pushed 3 commits to main...',
    body: `Jordan Lee pushed 3 commits to main in infra/terraform

- Update AWS configurations
- Add new security groups
- Refactor VPC setup`,
    date: new Date('2026-02-11T17:20:00'),
    read: true,
    starred: false,
    labels: ['github'],
  },
  {
    id: 'gh13',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[web/analytics] Issue assigned #234',
    preview: 'You were assigned an issue: Track user engagement metrics...',
    body: `You were assigned an issue in web/analytics

Issue #234: Track user engagement metrics

Implement analytics tracking for user engagement across the platform.`,
    date: new Date('2026-02-11T14:00:00'),
    read: false,
    starred: false,
    labels: ['github'],
  },
  {
    id: 'gh14',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[docs/guides] PR comment #67',
    preview: 'David Park commented on your pull request...',
    body: `David Park commented on your pull request in docs/guides

PR #67: Add deployment guide

"Great documentation! Just a few minor suggestions on the Docker section."`,
    date: new Date('2026-02-11T10:30:00'),
    read: true,
    starred: false,
    labels: ['github'],
  },
  {
    id: 'gh15',
    from: {
      name: 'GitHub',
      email: 'notifications@github.com',
      avatar: 'https://i.pravatar.cc/150?u=github',
    },
    subject: '[mobile/ios] Build succeeded',
    preview: 'Your build completed successfully on develop branch...',
    body: `Your build completed successfully on the develop branch in mobile/ios

All tests passed. Ready for deployment.

View details on GitHub Actions.`,
    date: new Date('2026-02-10T16:15:00'),
    read: true,
    starred: false,
    labels: ['github'],
  },
];

export const slackEmails: Email[] = [
  {
    id: 'sl1',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'You have 15 new mentions in #engineering',
    preview: '@alex mentioned you in a discussion about the new API design...',
    body: `You have new mentions in Slack:

#engineering
@alex: Can you review the new API design proposal?

#design
@sarah: Great work on the dashboard redesign!

View all mentions in Slack.`,
    date: new Date('2026-02-15T11:05:00'),
    read: false,
    starred: false,
    labels: ['slack'],
  },
  {
    id: 'sl2',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'New message in #general',
    preview: 'Team standup starting in 15 minutes...',
    body: `@channel Team standup starting in 15 minutes in the main conference room.

Agenda:
- Sprint review
- Q1 planning
- New hire introductions`,
    date: new Date('2026-02-15T08:45:00'),
    read: false,
    starred: true,
    labels: ['slack'],
  },
  {
    id: 'sl3',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'Message from #design',
    preview: 'Lisa Martinez shared a file: Updated mockups.fig...',
    body: `Lisa Martinez shared a file in #design

Updated mockups.fig - Latest design iterations for the dashboard

Click to view in Slack.`,
    date: new Date('2026-02-14T17:20:00'),
    read: true,
    starred: false,
    labels: ['slack'],
  },
  {
    id: 'sl4',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'You were added to #product-launch',
    preview: 'Marcus Rodriguez added you to a new channel...',
    body: `Marcus Rodriguez added you to #product-launch

Channel description: Coordination for the Q2 product launch

View channel in Slack.`,
    date: new Date('2026-02-14T15:30:00'),
    read: true,
    starred: false,
    labels: ['slack'],
  },
  {
    id: 'sl5',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'Thread reply in #development',
    preview: 'Kevin O\'Brien replied to your message about deployment...',
    body: `Kevin O'Brien replied to your message in #development

"I've updated the deployment script. Should work now!"

View thread in Slack.`,
    date: new Date('2026-02-14T13:15:00'),
    read: false,
    starred: true,
    labels: ['slack'],
  },
  {
    id: 'sl6',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'New message in #announcements',
    preview: 'Sarah Chen: Important update about company all-hands...',
    body: `Sarah Chen posted in #announcements

Important update about company all-hands meeting this Friday at 3 PM.

All team members required to attend.`,
    date: new Date('2026-02-14T10:00:00'),
    read: true,
    starred: false,
    labels: ['slack'],
  },
  {
    id: 'sl7',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'Reminder in #team-social',
    preview: 'Don\'t forget: Team lunch tomorrow at 12:30 PM...',
    body: `Reminder in #team-social

Team lunch tomorrow at 12:30 PM at The Garden Restaurant.

RSVP in the thread!`,
    date: new Date('2026-02-13T18:45:00'),
    read: true,
    starred: false,
    labels: ['slack'],
  },
  {
    id: 'sl8',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'Direct message from Rachel Green',
    preview: 'Quick question about the marketing campaign...',
    body: `Rachel Green sent you a direct message

"Quick question about the marketing campaign - do you have the latest analytics report?"

Reply in Slack.`,
    date: new Date('2026-02-13T16:20:00'),
    read: false,
    starred: false,
    labels: ['slack'],
  },
  {
    id: 'sl9',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'File shared in #resources',
    preview: 'Taylor Kim shared: Q1 Performance Metrics.xlsx...',
    body: `Taylor Kim shared a file in #resources

Q1 Performance Metrics.xlsx

Complete breakdown of Q1 performance across all departments.`,
    date: new Date('2026-02-13T14:10:00'),
    read: true,
    starred: true,
    labels: ['slack'],
  },
  {
    id: 'sl10',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'Poll in #engineering',
    preview: 'Emily Watson created a poll: Preferred code review tool...',
    body: `Emily Watson created a poll in #engineering

What's your preferred code review tool?
- GitHub PR
- GitLab MR
- Gerrit

Vote now in Slack!`,
    date: new Date('2026-02-13T11:30:00'),
    read: true,
    starred: false,
    labels: ['slack'],
  },
  {
    id: 'sl11',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'Workflow completed',
    preview: 'Your workflow "Deploy to Production" completed successfully...',
    body: `Your workflow "Deploy to Production" completed successfully

All steps finished without errors.

View details in Slack.`,
    date: new Date('2026-02-12T19:00:00'),
    read: true,
    starred: false,
    labels: ['slack'],
  },
  {
    id: 'sl12',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'Thread update in #support',
    preview: 'Jordan Lee marked your thread as resolved...',
    body: `Jordan Lee marked your thread as resolved in #support

Issue: Login bug on mobile app

The fix has been deployed to production.`,
    date: new Date('2026-02-12T16:40:00'),
    read: true,
    starred: false,
    labels: ['slack'],
  },
  {
    id: 'sl13',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'New mention in #random',
    preview: '@everyone: Happy Friday! Team happy hour at 5 PM...',
    body: `@everyone mentioned in #random

Happy Friday! Team happy hour at 5 PM today.

Join us at the usual spot!`,
    date: new Date('2026-02-12T14:20:00'),
    read: false,
    starred: true,
    labels: ['slack'],
  },
  {
    id: 'sl14',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'Huddle started in #design',
    preview: 'Alex Thompson started a huddle in #design...',
    body: `Alex Thompson started a huddle in #design

Topic: Quick sync on the new feature designs

Join the huddle in Slack.`,
    date: new Date('2026-02-12T10:15:00'),
    read: true,
    starred: false,
    labels: ['slack'],
  },
  {
    id: 'sl15',
    from: {
      name: 'Slack',
      email: 'notifications@slack.com',
      avatar: 'https://i.pravatar.cc/150?u=slack',
    },
    subject: 'Scheduled message in #standups',
    preview: 'Daily standup reminder: Post your updates...',
    body: `Daily standup reminder in #standups

Please post your updates:
- What did you do yesterday?
- What will you do today?
- Any blockers?`,
    date: new Date('2026-02-11T09:00:00'),
    read: true,
    starred: false,
    labels: ['slack'],
  },
];

export const clickupEmails: Email[] = [
  {
    id: 'cu1',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'Task assigned: Update landing page design',
    preview: 'Sarah Chen assigned you a new task with high priority...',
    body: `You have been assigned a new task:

Title: Update landing page design
Priority: High
Due date: Feb 20, 2026

Description:
Redesign the landing page to match the new brand guidelines. Include hero section, features, and testimonials.

View task in ClickUp.`,
    date: new Date('2026-02-15T10:30:00'),
    read: false,
    starred: false,
    labels: ['clickup'],
  },
  {
    id: 'cu2',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'Comment on: Implement authentication flow',
    preview: '@john left a comment: The OAuth integration looks good...',
    body: `New comment on your task:

Task: Implement authentication flow

@john: The OAuth integration looks good, but we should add 2FA support as well.

Reply in ClickUp.`,
    date: new Date('2026-02-14T15:20:00'),
    read: true,
    starred: false,
    labels: ['clickup'],
  },
  {
    id: 'cu3',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'Task completed: Mobile app testing',
    preview: 'Marcus Rodriguez marked "Mobile app testing" as complete...',
    body: `Marcus Rodriguez marked a task as complete:

Task: Mobile app testing

All test cases passed. Ready for production release.

View in ClickUp.`,
    date: new Date('2026-02-14T13:45:00'),
    read: true,
    starred: true,
    labels: ['clickup'],
  },
  {
    id: 'cu4',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'Due soon: Database migration',
    preview: 'Your task "Database migration" is due in 2 days...',
    body: `Reminder: Your task is due soon

Task: Database migration
Due date: Feb 17, 2026

Make sure to complete this before the deadline.

View in ClickUp.`,
    date: new Date('2026-02-14T09:00:00'),
    read: false,
    starred: false,
    labels: ['clickup'],
  },
  {
    id: 'cu5',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'New checklist item: Security audit',
    preview: 'Emily Watson added a checklist to "Security audit"...',
    body: `Emily Watson added a checklist to your task:

Task: Security audit

Checklist items:
- Review authentication system
- Check data encryption
- Audit API endpoints
- Test rate limiting

View in ClickUp.`,
    date: new Date('2026-02-13T17:30:00'),
    read: true,
    starred: false,
    labels: ['clickup'],
  },
  {
    id: 'cu6',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'Status changed: API documentation',
    preview: 'Task status changed from "In Progress" to "Review"...',
    body: `Task status changed:

Task: API documentation
From: In Progress
To: Review

Ready for team review.

View in ClickUp.`,
    date: new Date('2026-02-13T15:10:00'),
    read: true,
    starred: false,
    labels: ['clickup'],
  },
  {
    id: 'cu7',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'Mentioned in: Sprint planning',
    preview: 'Alex Thompson mentioned you in a task comment...',
    body: `Alex Thompson mentioned you in a comment:

Task: Sprint planning

@you: Can you estimate the time for the dashboard redesign?

Reply in ClickUp.`,
    date: new Date('2026-02-13T12:20:00'),
    read: false,
    starred: true,
    labels: ['clickup'],
  },
  {
    id: 'cu8',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'Task overdue: Client presentation',
    preview: 'Your task "Client presentation" is overdue...',
    body: `Task overdue alert:

Task: Client presentation
Was due: Feb 12, 2026

Please update the status or reschedule.

View in ClickUp.`,
    date: new Date('2026-02-13T09:00:00'),
    read: true,
    starred: false,
    labels: ['clickup'],
  },
  {
    id: 'cu9',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'Priority changed: Bug fixes',
    preview: 'Taylor Kim changed priority from "Normal" to "Urgent"...',
    body: `Task priority changed:

Task: Bug fixes
From: Normal
To: Urgent

Multiple users reporting the same issue. Please prioritize.

View in ClickUp.`,
    date: new Date('2026-02-12T18:15:00'),
    read: false,
    starred: true,
    labels: ['clickup'],
  },
  {
    id: 'cu10',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'File attached: Design mockups',
    preview: 'Lisa Martinez attached files to "Design mockups"...',
    body: `Lisa Martinez attached files to your task:

Task: Design mockups

Files:
- Homepage_v2.fig
- Dashboard_final.png

View in ClickUp.`,
    date: new Date('2026-02-12T16:00:00'),
    read: true,
    starred: false,
    labels: ['clickup'],
  },
  {
    id: 'cu11',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'Task moved: User research',
    preview: 'Kevin O\'Brien moved "User research" to "Completed"...',
    body: `Kevin O'Brien moved a task:

Task: User research
From: In Progress
To: Completed

All research findings documented and shared.

View in ClickUp.`,
    date: new Date('2026-02-12T13:30:00'),
    read: true,
    starred: false,
    labels: ['clickup'],
  },
  {
    id: 'cu12',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'Subtask created: Code review',
    preview: 'Rachel Green created a subtask under "Feature development"...',
    body: `Rachel Green created a subtask:

Parent task: Feature development
Subtask: Code review

Assigned to you. Due Feb 18, 2026.

View in ClickUp.`,
    date: new Date('2026-02-12T11:00:00'),
    read: true,
    starred: false,
    labels: ['clickup'],
  },
  {
    id: 'cu13',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'Time tracked: Development work',
    preview: 'You tracked 4 hours on "Development work"...',
    body: `Time tracking summary:

Task: Development work
Time tracked: 4 hours
Total time: 12 hours

View details in ClickUp.`,
    date: new Date('2026-02-11T18:45:00'),
    read: true,
    starred: false,
    labels: ['clickup'],
  },
  {
    id: 'cu14',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'Dependency added: Backend integration',
    preview: 'Michael Zhang added a dependency to your task...',
    body: `Michael Zhang added a dependency:

Task: Frontend UI
Depends on: Backend integration

Waiting for backend work to complete.

View in ClickUp.`,
    date: new Date('2026-02-11T15:20:00'),
    read: false,
    starred: false,
    labels: ['clickup'],
  },
  {
    id: 'cu15',
    from: {
      name: 'ClickUp',
      email: 'notifications@clickup.com',
      avatar: 'https://i.pravatar.cc/150?u=clickup',
    },
    subject: 'Weekly summary: Your activity',
    preview: 'You completed 12 tasks this week. Great job!...',
    body: `Your weekly activity summary:

Tasks completed: 12
Tasks in progress: 5
Total time tracked: 32 hours

Keep up the great work!

View in ClickUp.`,
    date: new Date('2026-02-11T09:00:00'),
    read: true,
    starred: true,
    labels: ['clickup'],
  },
];

export const notionEmails: Email[] = [
  {
    id: 'nt1',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Page shared with you: Product Roadmap Q1 2026',
    preview: 'Alex Thompson shared a page with you...',
    body: `Alex Thompson shared a page with you in Notion:

Product Roadmap Q1 2026

This page contains the complete product roadmap for Q1 including features, timeline, and resource allocation.

View page in Notion.`,
    date: new Date('2026-02-15T09:00:00'),
    read: false,
    starred: true,
    labels: ['notion'],
  },
  {
    id: 'nt2',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Reminder: Weekly review due today',
    preview: 'Your weekly review is due by end of day...',
    body: `Reminder: Your weekly review is due today.

Please complete your weekly review including:
- Completed tasks
- Blockers
- Next week's goals

Complete in Notion.`,
    date: new Date('2026-02-15T07:00:00'),
    read: true,
    starred: false,
    labels: ['notion'],
  },
  {
    id: 'nt3',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Comment on: Team Wiki Update',
    preview: 'Sarah Chen commented on your page...',
    body: `Sarah Chen commented on your page:

Page: Team Wiki Update

"Great documentation! I've added some additional resources to the bottom."

View in Notion.`,
    date: new Date('2026-02-14T18:30:00'),
    read: true,
    starred: false,
    labels: ['notion'],
  },
  {
    id: 'nt4',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Page updated: Engineering Guidelines',
    preview: 'Marcus Rodriguez made changes to "Engineering Guidelines"...',
    body: `Marcus Rodriguez made changes to a page you're following:

Page: Engineering Guidelines

Updated sections:
- Code review process
- Git workflow
- Testing standards

View changes in Notion.`,
    date: new Date('2026-02-14T16:15:00'),
    read: false,
    starred: true,
    labels: ['notion'],
  },
  {
    id: 'nt5',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Mentioned in: Sprint Planning Notes',
    preview: '@you were mentioned in Sprint Planning Notes...',
    body: `You were mentioned in Sprint Planning Notes by Emily Watson:

"@you can you add your estimates for the authentication module?"

View in Notion.`,
    date: new Date('2026-02-14T14:00:00'),
    read: true,
    starred: false,
    labels: ['notion'],
  },
  {
    id: 'nt6',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Database created: Q1 Performance Metrics',
    preview: 'Taylor Kim created a new database...',
    body: `Taylor Kim created a new database:

Database: Q1 Performance Metrics

Track and analyze performance metrics across all teams.

View in Notion.`,
    date: new Date('2026-02-14T11:45:00'),
    read: true,
    starred: false,
    labels: ['notion'],
  },
  {
    id: 'nt7',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Page moved: Design System',
    preview: 'Jordan Lee moved "Design System" to a new location...',
    body: `Jordan Lee moved a page:

Page: Design System
From: Projects
To: Documentation

Better organization for team access.

View in Notion.`,
    date: new Date('2026-02-13T17:50:00'),
    read: true,
    starred: false,
    labels: ['notion'],
  },
  {
    id: 'nt8',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Template shared: Meeting Notes',
    preview: 'Lisa Martinez shared a template with your workspace...',
    body: `Lisa Martinez shared a template:

Template: Meeting Notes

Use this template for all team meetings going forward.

View in Notion.`,
    date: new Date('2026-02-13T15:30:00'),
    read: false,
    starred: true,
    labels: ['notion'],
  },
  {
    id: 'nt9',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Duplicate created: Project Template',
    preview: 'Kevin O\'Brien duplicated "Project Template"...',
    body: `Kevin O'Brien duplicated a page:

Original: Project Template
New page: Mobile App Project

Ready for the new mobile app project.

View in Notion.`,
    date: new Date('2026-02-13T13:10:00'),
    read: true,
    starred: false,
    labels: ['notion'],
  },
  {
    id: 'nt10',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Access granted: Team Workspace',
    preview: 'You now have access to Team Workspace...',
    body: `You've been granted access:

Workspace: Team Workspace
Role: Editor

You can now view and edit all pages.

View in Notion.`,
    date: new Date('2026-02-13T10:00:00'),
    read: true,
    starred: false,
    labels: ['notion'],
  },
  {
    id: 'nt11',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Property added: Status field',
    preview: 'Rachel Green added a new property to the Tasks database...',
    body: `Rachel Green added a new property:

Database: Tasks
Property: Status (Select)

Options: Not Started, In Progress, Review, Done

View in Notion.`,
    date: new Date('2026-02-12T17:40:00'),
    read: true,
    starred: false,
    labels: ['notion'],
  },
  {
    id: 'nt12',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'View created: My Tasks',
    preview: 'You created a new view in the Tasks database...',
    body: `You created a new view:

Database: Tasks
View: My Tasks

Filter: Assigned to me
Sort: Due date (ascending)

View in Notion.`,
    date: new Date('2026-02-12T15:20:00'),
    read: true,
    starred: false,
    labels: ['notion'],
  },
  {
    id: 'nt13',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Reminder: Update project status',
    preview: 'Don\'t forget to update the project status page...',
    body: `Reminder:

Page: Project Status Dashboard

Please update your team's progress by end of day.

View in Notion.`,
    date: new Date('2026-02-12T09:00:00'),
    read: false,
    starred: false,
    labels: ['notion'],
  },
  {
    id: 'nt14',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Synced block updated: Company Goals',
    preview: 'A synced block you\'re following was updated...',
    body: `A synced block was updated:

Block: Company Goals
Updated by: David Park

Latest quarterly goals have been added.

View in Notion.`,
    date: new Date('2026-02-11T16:30:00'),
    read: true,
    starred: true,
    labels: ['notion'],
  },
  {
    id: 'nt15',
    from: {
      name: 'Notion',
      email: 'notifications@notion.so',
      avatar: 'https://i.pravatar.cc/150?u=notion',
    },
    subject: 'Workspace export ready',
    preview: 'Your workspace export is ready for download...',
    body: `Your workspace export is complete:

Export type: Markdown & CSV
Size: 45 MB

Download link expires in 7 days.

Download from Notion.`,
    date: new Date('2026-02-11T14:00:00'),
    read: true,
    starred: false,
    labels: ['notion'],
  },
];

export const emailsByFolder: Record<string, Email[]> = {
  inbox: mockEmails,
  github: githubEmails,
  slack: slackEmails,
  clickup: clickupEmails,
  notion: notionEmails,
  sent: [mockEmails[1], mockEmails[3]],
  favorites: mockEmails.filter(e => e.starred),
  drafts: [],
  all: [...mockEmails, ...githubEmails, ...slackEmails, ...clickupEmails, ...notionEmails],
};
