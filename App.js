import React from 'react';

function App() {
  const user = { name: "D. Sahithya", email: "sahithya@gmail.com" };
  return (
    <User1 user={user} />
  );
}

function User1({ user }) {
  return (
    <User2 user={user} />
  );
}

function User2({ user }) {
  return (
    <User3 user={user} />
  );
}

function User3({ user }) {
  return (
    <Profile user={user} />
  );
}

function Profile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default App;