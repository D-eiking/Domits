import React, { useEffect, useState } from "react";
import Pages from "./Pages.js";
import styles from "./HostProperty.module.css"; 
import spinner from "../../images/spinnner.gif";
import Back from '@mui/icons-material/KeyboardBackspace';

const HostProperty = () => {
  console.log("HostProperty Loaded");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Pages />
      </div>

      <main className={styles.content}>
      <div className="propertyHeader">
        <Back />
        <h1>Property-editor</h1>
        </div>


        <div className={styles.hostPropertyContainer}>
          {isLoading ? (
            <div className={styles.spinnerContainer}>
              <img src={spinner} alt="Loading..." />
            </div>
          ) : (
            <h2 className={styles.responsiveText}>
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </h2>
          )}
        </div>
      </main>
    </div>
  );
};

export default HostProperty;
