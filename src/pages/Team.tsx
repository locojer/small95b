import { FunctionComponent, useCallback } from "react";
import styles from "./Small95.module.css";

const Team: FunctionComponent = () => {
  return (
    <div className={styles.team}>
      <b className={styles.ourLeadership}>Our leadership</b>
      <div className={styles.convallisTurpisErat}>
        Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor
        sit ipsum malesuada a, duis volutpat.
      </div>
      <div className={styles.info}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-41@2x.png"
          />
          <div className={styles.andryFordParent}>
            <b className={styles.andryFord}>Andry Ford</b>
            <div className={styles.ceoAtWhatever}>CEO at Whatever</div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-40@2x.png"
          />
          <div className={styles.andryFordParent}>
            <b className={styles.andryFord}>Andry Ford</b>
            <div className={styles.ceoAtWhatever}>CEO at Whatever</div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-39@2x.png"
          />
          <div className={styles.andryFordParent}>
            <b className={styles.andryFord}>Andry Ford</b>
            <div className={styles.ceoAtWhatever}>CEO at Whatever</div>
          </div>
        </button>
        <button className={styles.col1} onClick={onCol4Click}>
          <div className={styles.norwaycard}>
            <img
              className={styles.norwayimageIcon}
              alt=""
              src="/tuscanyimage@2x.png"
            />
            <div className={styles.destinationDetails}>
              <b className={styles.paris}>Tuscany</b>
              <div className={styles.details3}>
                <div className={styles.div3}>$1245</div>
                <div className={styles.from3}>from</div>
              </div>
            </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-38@2x.png"
          />
          <div className={styles.andryFordParent}>
            <b className={styles.andryFord}>Andry Ford</b>
            <div className={styles.ceoAtWhatever}>CEO at Whatever</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Small95;
