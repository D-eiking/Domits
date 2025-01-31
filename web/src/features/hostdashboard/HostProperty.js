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
        <div className={styles.propertyHeader}>
          <Back />
          <h1>Property-editor</h1>
        </div>

        <div className={styles.mainSection}>
          {/* Left side */}
          <div className={styles.left}>
            <div className={styles.switch}>
              <button>Details</button>
              <button>Rules</button>
            </div>

            <button> 
              <h4>Complete required steps</h4>
              <p>Complete these final tasks to publish your listing and start getting bookings.</p>
            </button>

            <button>
              <h4>Fotos</h4>
              <p>Add extra photos to show people more of your accommodation.</p>
            </button>

            <button>
              <h4>Add a new room or space</h4>
              <p>2 bedrooms - 2 beds - 1 bathroom</p>
            </button>

            <button>
              <h4>Title</h4>
              <p>Tropical villa with pool</p>
            </button>

            <button>
              <h4>Accommodation type</h4>
              <p>Entire house - Villa</p>
            </button>
          </div>

          {/* Right side - Just a full-size box */}
          <div className={styles.right}></div>
        </div>
      </main>
    </div>
  );
};

export default HostProperty;
