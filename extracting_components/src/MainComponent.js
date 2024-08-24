import React from 'react';
import { LoginButton, LogoutButton } from './Button'; // Import the button components

const MainComponent = ({ isLoggedIn }) => {
return (
<div>
<h1>Welcome to the App</h1>
{isLoggedIn ? <LogoutButton /> : <LoginButton />}
</div>
);
};

export default MainComponent;