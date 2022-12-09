import jwt_decode from 'jwt-decode';
import cookie from 'js-cookie';
import { IUserId } from './types';

export const UserHeaders = [
  {
    id: 'username',
    displayName: 'Username',
  },
  {
    id: 'email',
    displayName: 'Email',
  },
  {
    id: 'role',
    displayName: 'Role',
  },
];

export const childheaders = [
  {
    id: 'firstname',
    displayName: 'Firstname',
  },
  {
    id: 'lastname',
    displayName: 'Lastname',
  },
  {
    id: 'age',
    displayName: 'Age',
  },
  {
    id: 'date_of_birth',
    displayName: 'Date of birth',
  },
  {
    id: 'date_of_surrendered',
    displayName: 'Date surrendered',
  },
  {
    id: 'date_of_addmission',
    displayName: 'Date of Admission',
  },

  {
    id: 'gender',
    displayName: 'Gender',
  },
  {
    id: 'moral',
    displayName: 'Moral',
  },
  {
    id: 'present_whereabouts',
    displayName: 'Present Whereabouts',
  },
];

export const visitHeader = [
  {
    id: 'users',
    displayName: 'Created By',
  },
  {
    id: 'orphan',
    displayName: 'Orphan Name',
  },
  {
    id: 'purpose',
    displayName: ' Purpose',
  },
  {
    id: 'status',
    displayName: ' Status',
  },
  {
    id: 'date_added',
    displayName: ' Date Added',
  },
];
export const Capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getUserLoginId = () => {
  const { userID, userId }: IUserId = jwt_decode(cookie.get('token') as any);
  return { userID, userId };
};
