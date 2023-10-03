import React, { useState } from "react";
import { ThemeProvider } from "./themeContext/ThemeContext";

import ThemeBtn from "./themeBtn/ThemeBtn";
import SingIn from "./signIn/SignIn";
import SingUp from "./signUp/SignUp";
import UserPage from "./userPage/UserPage";
import UserProfile from "./userProfile/UserProfile";


function App() {
  const [entrance, setEntrance] = useState(false);
  const [registration, setRegistration] = useState(true);
  
  const onRegistration = () => {
    setRegistration(!registration)
  }

   
  const onEntrance = () => {
    setEntrance(!entrance);
  }
  return (

    <ThemeProvider>
      <ThemeBtn />
      {entrance ?
        <UserProfile /> :
        // <UserPage onEntrance={onEntrance} /> :
        registration ?
          <SingIn
            onRegistration={onRegistration}
            onEntrance={onEntrance} /> :
          <SingUp
            onRegistration={onRegistration} />}
    </ThemeProvider>
  );
}

export default App;
