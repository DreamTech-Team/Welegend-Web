'use client';
import axios from 'axios';
import { useEffect } from 'react';

export default function UserProfile() {
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/v1/user')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return <>data</>;
}
