export interface Contact {
  id: number;
  name: string;
  designation: string;

  status: 'online' | 'offline' | 'busy';

  image: string;

  bio?: string;
  email?: string;
  secondaryEmail?: string;
  phone?: string;
  secondaryPhone?: string;
  meetingLink?: string;
  website?: string;
}