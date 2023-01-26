import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from './Button'
import "./InstaFour.css";
import { Helmet } from 'react-helmet';

export default function InstaFour() {

  useEffect(() => {
    setTimeout(
      () =>
        document.getElementById("toberemoved").remove()
      ,
      1000
    );
    return () => { };
  })
    ;

  return (
    <>
      <Helmet>
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      </Helmet>
      <div class="elfsight-app-c17633cb-859e-4896-93e0-e58789712bcd">
      </div>
      <div style={{ height: "200px", display: "flex", alignItems: "center" }}>
        <div id="toberemoved" className="loader" />
      </div>
    </>
  );
}
