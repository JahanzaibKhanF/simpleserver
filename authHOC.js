import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function authHOC(WrappedPage) {
  return function AuthenticatedPage() {
 const router =useRouter();
    useEffect(() => {
        if (localStorage.getItem('authenticated')!=='yesAuthenticated') {
          router.push('/admin/login');
        }
    })
    return <WrappedPage />
  };
}
