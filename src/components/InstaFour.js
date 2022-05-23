import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from './Button'
import "./InstaFour.css";

export default function InstaFour() {
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    axios
      .get("https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url&limit=99&access_token=IGQVJYUjJCcUFVVVl3V2VDTlFNVXRXX3M3c090QjQzRHdiNWI2QXFhSXcxMjJUUmpWRnZA5eF9qaUFrZA1Rfck0xSE9RV3lBNUFLVXk1RmozOWZA6T0U3amU0LWFxNWhlc0U0N0lFT2tDWnFpT29WVUNrWQZDZD")
      .then(result => {
        setProfileData(result.data.data);
      });
  }, [])

  useEffect(() => {
    setTimeout(
      () =>
          document.getElementById("toberemoved").remove()
        ,
      4000
    );
    return () => {};
  })

  ;

  return (
    <div>  
      <div className="ig4-main-container">
        <div className="ig4-container">
            <div className="profile">
                <div className="profile-image">
                <img
                    src="./Images/channelLogo.png"
                    alt=""
                    width="140px"
                />
                </div>
                <div className="profile-user-settings">
                <h1 className="profile-user-name">NUS CAC Voices</h1>
                <button
                    className="ig4-btn profile-settings-btn"
                    aria-label="profile settings"
                >
                    <i className="fas fa-cog" aria-hidden="true" />
                </button>
                </div>
                <div className="profile-bio">
                <p>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/nusvoices'>
                        <Button buttonStyle='btn--outline--blue'>Follow</Button>
                    </a>
                </p>
                </div>
            </div>
            {/* End of profile section */}
            </div>
            <div className="ig4-container-2">
            <div className="gallery-flex-container">
              {profileData.map((item, key) => (
                <div className="gallery-flex-item" tabIndex={key}>
                  <img src={item.thumbnail_url || item.media_url} className="gallery-image" alt=""/>
                  {/* <div className="gallery-item-info">{item.caption}</div> */}
                </div>
              ))}
            </div>
            </div>
            {/* End of gallery */}
        <div id="toberemoved" className="loader" />
        {/* End of container */}
      </div>
      <div className='ig-footer-container'>
        <section className="ig-footer-subscription">  
            <p className='ig-footer-subscription-heading'>
                Follow our Instagram @nusvoices For More!
            </p>
            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/nusvoices'>
              <img src="images/Square-Instagram-Logo.png" alt=""/>
            </a>
        </section>
      </div>
    </div>
  );
}
