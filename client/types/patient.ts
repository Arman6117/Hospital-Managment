export type Patient = {
    id: number;
    name: string;
    age: number;
    gender: 'Male' | 'Female' | 'Other';
    mobile: string;
    lastVisited: string;
    createdAt: string;
  };