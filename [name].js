
import Navbar from '@/pages/Navbar/Navbar'
import React from 'react'
import { useRouter } from 'next/router'

const Developer = () => {
  const router = useRouter();
  const number = router.query.name;
  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];

  const user = details.find(user => user.id == number);

  return (
    <div>
      <Navbar />
      {user ? (
        <h3>
          {user.name} - {user.role}
        </h3>
      ) : (
        <h3>Developer doesn't exist</h3>
      )}
    </div>
  );
}

export default Developer;
