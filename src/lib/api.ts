// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function registerUser(data: any) {
  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
    if (!res.ok) {
    // if backend sends plain text or HTML on error, avoid .json()
    const errorText = await res.text();
    throw new Error(`Failed to register: ${errorText}`);
  }

  //  this must be valid JSON from the server
  return await res.json();
}

export async function loginUser(credentials: { user_name?: string; email?: string; password: string }) {
  const res = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const contentType = res.headers.get('content-type');
console.log(`${API_URL}/users/login`)
  if (!res.ok) {
    throw new Error('Login failed: ' + res.status);
  }

  if (contentType && contentType.includes('application/json')) {
    return await res.json();
  } else {
    throw new Error('Expected JSON but got: ' + contentType);
  }
}

export async function getUser(token: string) {
  const res = await fetch(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}  
export async function getUserById(id: string) {
  const res = await fetch(`${API_URL}/user/${id}`);
  return res.json();
}