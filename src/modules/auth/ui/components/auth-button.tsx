import { Button } from '@/components/ui/button';
import { UserCircleIcon } from 'lucide-react';
import React from 'react';

const AuthButton = () => {
  // TODO: Add different auth states
  return (
    <Button
      variant="outline"
      className="px-4 py-2 text-sm font-medium text-blue-600 border-blue-500/20 hover:text-blue-500 rounded-full shadow-none"
    >
      <UserCircleIcon />
      Sign in
    </Button>
  );
};

export default AuthButton;
