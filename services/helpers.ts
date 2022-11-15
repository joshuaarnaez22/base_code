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

export const Capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
