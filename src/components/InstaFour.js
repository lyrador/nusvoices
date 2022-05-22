import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from './Button'
import "./InstaFour.css";

export default function InstaFour() {
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    axios
      .get("https://v1.nocodeapi.com/chevalierdx7/instagram/WLnFuhNpyndzgSWg")
      .then(result => {
        setProfileData(result.data.data);
      });
  }, []);

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
                  <img src={item.media_url} className="gallery-image" alt="" />
                  {/* <div className="gallery-item-info">{item.caption}</div> */}
                </div>
              ))}
            </div>
            </div>
            {/* End of gallery */}
        {/* <div className="loader" /> */}
        {/* End of container */}
      </div>
    </div>
  );
}
