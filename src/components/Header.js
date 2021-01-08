import React from 'react'; 

function Header({ users }) {
  return (
        <div>
            <h1>Real Estate Dashboard</h1>
             User address: {users}
        </div>
  );
}

export default Header;