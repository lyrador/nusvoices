import React, { useEffect, useState } from "react";
import axios from "axios";
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
      <header>
        <div className="ig4-container">
          {/* <div className="profile">
            <div className="profile-image">
              <img
                src="https://avatars2.githubusercontent.com/u/9165019?v=4"
                alt=""
                width="120px"
              />
            </div>
            <div className="profile-user-settings">
              <h1 className="profile-user-name">Mohd Danish</h1>
              <button
                className="ig4-btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i className="fas fa-cog" aria-hidden="true" />
              </button>
            </div>
            <div className="profile-bio">
              <p>
                <span className="profile-real-name">Mohd Danish</span> Lorem
                ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
              </p>
            </div>
          </div> */}
          {/* End of profile section */}
        </div>
        
        {/* End of containers */}
      </header>
      <main>
        <div className="ig4-container">
          <div className="gallery">
            {profileData.map((item, key) => (
              <div className="gallery-item" tabIndex={key}>
                <img src={item.media_url} className="gallery-image" alt="" />
                <div className="gallery-item-info">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
        {/* End of gallery */}
        <div className="loader" />
        {/* End of container */}
      </main>
    </div>
  );
}
