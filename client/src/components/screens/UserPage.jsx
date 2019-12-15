import React from "react";
import UserInfo from "./UserInfo";
import Favorites from "./Favorites";
import './styles/user-page.css'
const UserPage = () => {
  return (
  
 
      <>
      <div className ='user-container'>
      <UserInfo />
      <div className='account-info'>
          <h1>Account Info:</h1>
          <div className='user-image'></div>

          <h2 className='user-name'>Dolly P.</h2>
          <img className='user-img' src="https://countrymusichalloffame.org/content/uploads/2019/03/Parton_Dolly.jpg"/>
          <p>Username: dolly</p>
          <p>dolly@gmail.com</p>
          <p>#@password##</p>
      </div>

      <div className='favorites'>
      <Favorites />


          </div>
      </div>
      </>
  );
};
export default UserPage;