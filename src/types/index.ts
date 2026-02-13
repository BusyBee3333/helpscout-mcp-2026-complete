// HelpScout Mailbox API v2 Types

export interface HelpScoutConfig {
  appId?: string;
  appSecret?: string;
  accessToken: string;
}

export interface APIError {
  message: string;
  logref?: string;
  _links?: {
    about?: { href: string };
  };
}

export interface PagedResponse<T> {
  _embedded: T;
  _links?: {
    self?: { href: string };
    first?: { href: string };
    last?: { href: string };
    next?: { href: string };
    prev?: { href: string };
    page?: { href: string };
  };
  page?: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

// Conversations
export interface Conversation {
  id: number;
  number: number;
  threads: number;
  type: 'email' | 'chat' | 'phone';
  folderId: number;
  status: 'active' | 'closed' | 'open' | 'pending' | 'spam';
  state: 'deleted' | 'draft' | 'published';
  subject: string;
  preview: string;
  mailboxId: number;
  assignee?: Person;
  createdBy: Person;
  createdAt: string;
  closedBy?: number;
  closedByUser?: Person;
  closedAt?: string;
  userUpdatedAt: string;
  customerWaitingSince?: {
    time: string;
    friendly: string;
  };
  source: {
    type: string;
    via: 'user' | 'customer';
  };
  tags?: Tag[];
  cc?: string[];
  bcc?: string[];
  primaryCustomer: Customer;
  snooze?: {
    snoozedBy: number;
    snoozedUntil: string;
    unsnoozeOnCustomerReply: boolean;
  };
  nextEvent?: {
    time: string;
    eventType: 'snooze' | 'scheduled';
    userId: number;
    cancelOnCustomerReply: boolean;
  };
  customFields?: CustomField[];
  _embedded?: {
    threads?: Thread[];
  };
  _links?: Record<string, { href: string }>;
}

export interface Thread {
  id: number;
  type: 'note' | 'message' | 'customer' | 'lineitem' | 'chat' | 'phone';
  status: 'active' | 'nochange' | 'pending';
  state: 'published' | 'draft' | 'deleted' | 'hidden';
  action?: {
    type: string;
    text: string;
  };
  body: string;
  source: {
    type: string;
    via: string;
  };
  customer?: Customer;
  createdBy: Person;
  assignedTo?: Person;
  savedReplyId?: number;
  to?: string[];
  cc?: string[];
  bcc?: string[];
  createdAt: string;
  openedAt?: string;
  _embedded?: {
    attachments?: Attachment[];
  };
}

export interface CreateThread {
  type: 'note' | 'message' | 'customer' | 'reply' | 'forwardCustomer' | 'forwardParent';
  text: string;
  user?: number;
  customer?: number;
  imported?: boolean;
  createdAt?: string;
  status?: 'active' | 'nochange' | 'pending';
  to?: string[];
  cc?: string[];
  bcc?: string[];
  attachments?: CreateAttachment[];
  draft?: boolean;
}

export interface Attachment {
  id: number;
  mimeType: string;
  filename: string;
  size: number;
  width?: number;
  height?: number;
  url: string;
  _links?: {
    data?: { href: string };
  };
}

export interface CreateAttachment {
  fileName: string;
  mimeType: string;
  data: string; // base64
}

// Customers
export interface Customer {
  id: number;
  type?: 'customer';
  first?: string;
  last?: string;
  email: string;
  phone?: string;
  photoUrl?: string;
  photoType?: 'twitter' | 'facebook' | 'gravatar' | 'google' | 'unknown';
  gender?: 'male' | 'female' | 'unknown';
  age?: string;
  organization?: string;
  jobTitle?: string;
  location?: string;
  createdAt?: string;
  updatedAt?: string;
  background?: string;
  address?: Address;
  socialProfiles?: SocialProfile[];
  emails?: CustomerEmail[];
  phones?: CustomerPhone[];
  chats?: CustomerChat[];
  websites?: CustomerWebsite[];
  _embedded?: {
    entries?: CustomerEntry[];
  };
  _links?: Record<string, { href: string }>;
}

export interface Address {
  id?: number;
  lines: string[];
  city: string;
  state: string;
  postalCode: string;
  country: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SocialProfile {
  id?: number;
  type: 'twitter' | 'facebook' | 'linkedin' | 'aboutme' | 'google' | 'googleplus' | 'tungleme' | 'quora' | 'foursquare' | 'youtube' | 'flickr' | 'other';
  value: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CustomerEmail {
  id?: number;
  type: 'home' | 'work' | 'other';
  value: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CustomerPhone {
  id?: number;
  type: 'home' | 'work' | 'mobile' | 'fax' | 'pager' | 'other';
  value: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CustomerChat {
  id?: number;
  type: 'aim' | 'gtalk' | 'icq' | 'xmpp' | 'msn' | 'skype' | 'yahoo' | 'qq' | 'other';
  value: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CustomerWebsite {
  id?: number;
  value: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CustomerEntry {
  id: number;
  type: 'email' | 'phone' | 'chat' | 'website';
  value: string;
}

export interface CreateCustomer {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  photoUrl?: string;
  photoType?: 'twitter' | 'facebook' | 'gravatar' | 'google' | 'unknown';
  gender?: 'male' | 'female' | 'unknown';
  age?: string;
  organization?: string;
  jobTitle?: string;
  location?: string;
  background?: string;
  address?: Omit<Address, 'id' | 'createdAt' | 'updatedAt'>;
  socialProfiles?: Omit<SocialProfile, 'id' | 'createdAt' | 'updatedAt'>[];
  emails?: Omit<CustomerEmail, 'id' | 'createdAt' | 'updatedAt'>[];
  phones?: Omit<CustomerPhone, 'id' | 'createdAt' | 'updatedAt'>[];
  chats?: Omit<CustomerChat, 'id' | 'createdAt' | 'updatedAt'>[];
  websites?: Omit<CustomerWebsite, 'id' | 'createdAt' | 'updatedAt'>[];
}

// Mailboxes
export interface Mailbox {
  id: number;
  name: string;
  slug: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  _links?: Record<string, { href: string }>;
}

export interface MailboxFields {
  id: number;
  name: string;
  type: 'SINGLE_LINE' | 'MULTI_LINE' | 'DATE' | 'NUMBER' | 'DROPDOWN';
  order: number;
  required: boolean;
  options?: string[];
  _links?: Record<string, { href: string }>;
}

export interface Folder {
  id: number;
  name: string;
  type: 'mytickets' | 'unassigned' | 'drafts' | 'assigned' | 'closed' | 'spam' | 'deleted' | 'mine';
  userId?: number;
  totalCount: number;
  activeCount: number;
  updatedAt: string;
  _links?: Record<string, { href: string }>;
}

// Users
export interface User {
  id: number;
  type: 'user' | 'team';
  first?: string;
  last?: string;
  email: string;
  role: 'owner' | 'admin' | 'user';
  timezone: string;
  photoUrl?: string;
  createdAt: string;
  updatedAt: string;
  _links?: Record<string, { href: string }>;
}

export interface Person {
  id: number;
  type: 'user' | 'customer' | 'team';
  first?: string;
  last?: string;
  email?: string;
  photoUrl?: string;
}

// Teams
export interface Team {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  _links?: Record<string, { href: string }>;
}

export interface TeamMember {
  id: number;
  first: string;
  last: string;
  email: string;
  role: 'owner' | 'admin' | 'user';
  photoUrl?: string;
  _links?: Record<string, { href: string }>;
}

// Tags
export interface Tag {
  id: number;
  tag: string;
  color: string;
  createdAt?: string;
  updatedAt?: string;
  _links?: Record<string, { href: string }>;
}

// Workflows
export interface Workflow {
  id: number;
  mailboxId: number;
  type: 'manual' | 'automatic';
  status: 'active' | 'inactive' | 'invalid';
  order: number;
  name: string;
  createdAt: string;
  modifiedAt: string;
  _links?: Record<string, { href: string }>;
}

// Saved Replies
export interface SavedReply {
  id: number;
  text: string;
  name: string;
  _links?: Record<string, { href: string }>;
}

// Webhooks
export interface Webhook {
  id: number;
  url: string;
  state: 'enabled' | 'disabled';
  events: string[];
  notification: boolean;
  payloadVersion: 'V1' | 'V2';
  label?: string;
  secret?: string;
  _links?: Record<string, { href: string }>;
}

export interface CreateWebhook {
  url: string;
  events: string[];
  secret?: string;
}

// Reports
export interface Report {
  filterTags?: string[];
}

export interface ConversationReport {
  current: ReportMetrics;
  previous?: ReportMetrics;
  deltas?: {
    [key: string]: {
      value: number;
      percent: number;
    };
  };
}

export interface ReportMetrics {
  startDate: string;
  endDate: string;
  conversations: number;
  conversationsCreated: number;
  newConversations?: number;
  customers?: number;
  resolved?: number;
  replies?: number;
  repliesSent?: number;
  resolvedOnFirstReply?: number;
  responseTime?: TimeMetrics;
  resolutionTime?: TimeMetrics;
  firstResponseTime?: TimeMetrics;
}

export interface TimeMetrics {
  friendly: string;
  seconds: number;
}

export interface UserReport {
  user: Person;
  current: UserMetrics;
  previous?: UserMetrics;
  deltas?: Record<string, { value: number; percent: number }>;
}

export interface UserMetrics {
  startDate: string;
  endDate: string;
  totalConversations: number;
  conversationsCreated: number;
  conversationsResolved: number;
  repliesSent: number;
  resolvedOnFirstReply?: number;
  responseTime?: TimeMetrics;
  resolutionTime?: TimeMetrics;
  percentResolved?: number;
  happiness?: {
    score: number;
  };
}

export interface HappinessReport {
  current: HappinessMetrics;
  previous?: HappinessMetrics;
}

export interface HappinessMetrics {
  startDate: string;
  endDate: string;
  happinessScore: number;
  ratingsCount: number;
}

// Custom Fields
export interface CustomField {
  id: number;
  name: string;
  value: string | number;
  text?: string;
}

// Notes
export interface Note {
  text: string;
}

// Search
export interface SearchConversation {
  id: number;
  number: number;
  mailboxid: number;
  subject: string;
  status: string;
  threadCount: number;
  preview: string;
  customerId: number;
  customerEmail: string;
  customerName: string;
  updatedAt: string;
  url?: string;
}

export interface SearchCustomer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  photoUrl?: string;
  url?: string;
}

// Ratings
export interface Rating {
  id: number;
  customerId: number;
  userId?: number;
  threadId: number;
  rating: 'great' | 'okay' | 'bad';
  comments?: string;
  createdAt: string;
  modifiedAt?: string;
  _links?: Record<string, { href: string }>;
}
