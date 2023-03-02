import { FunctionComponent } from "react";
import styles from "./Team.module.css";

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

export default Team;
