import { User } from './user';

export interface OrganizationConfig {
  publicMembersPage?: boolean;
  publicAboutPage?: boolean;
}

export interface Organization {
  uuid?: string;
  name?: string;
  logo?: File;
  about?: string;
  members?: User[];
  config?: OrganizationConfig;
}
