import styles from "../../../styles/content/MainContent.module.css";

export const LeftWrapper = () => {
  return (
    <div className={styles.leftContent}>
      <div className={styles.tableOfContents}>
        <h1>Table Of Contents</h1>

        <ul className={styles.contentList}>
          <li className={styles.listItem}>
            <a href="#aboutIsland">About Havelock Island</a>
          </li>
          <li className={styles.listItem}>
            <a href="#longStay">How long to stay in Havelock?</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">When to visit Swaraj Dweep? (Havelock)</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">How to Reach Havelock?</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Directorate of Shipping Service</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Getting Around in Havelock</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Top things to do in Swaraj Dweep (Havelock)</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Hotels & Resorts in Swaraj Dweep (Havelock)</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Eat/ Dine/ Night Life in Havelock</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Important info about Havelock</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Cost in Havelock (Swaraj Dweep)</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">FAQs about Havelock</a>
          </li>
        </ul>
      </div>

      <div className={styles.content} id="aboutIsland">
        <h1>About Havelock Island</h1>
        <div className={styles.contentParagraph}>
          <p>
            Havelock in short, is paradise. It’s an island tucked away from the
            crowds in the warm waters of the Andaman Ocean. The island is
            covered mostly in dense jungle and fringed with white sandy beaches
            shaded by tall green trees. Diving in the crystal clear waters with
            shades of turquoise blue an experience that all must explore.
            Tourists simply love its picture perfect beaches, laid back vibe and
            amazing underwater world. <br /> <br />
            As far as islands in the Andamans go, Havelock is definitely the
            most tourism friendly and consequently the most visited. There are
            all sorts of accommodation options from bamboo cottages to luxury
            villas, great multinational cuisine restaurants, souvenir shops,
            ATMs and now even (slow but accessible) Internet cafés. You’ll find
            almost everything you need here, but at a slower pace. And even
            though it is one of the most visited islands in the Andamans it sees
            only a fraction of the visitors that crowd other paradise
            destinations around the globe.
          </p>
        </div>
      </div>

      <div className={styles.content} id="longStay">
        <h1>How long to stay in Havelock?</h1>
        <div className={styles.contentParagraph}>
          <p>
            The tourist season falls between November and mid-May and the peak
            season is between December– March. The monsoon season is between
            June and September. One should always expect light rains even during
            other seasons since it’s a tropical island. Feb and March are
            considered the best for water sports due to low tides and better
            visibility.
            <br />
            <br />
            <i>
              Read more for details on when is the{" "}
              <a
                className={styles.link}
                href="https://www.go2andaman.com/havelock-island/best-time-to-visit-havelock/"
                target="_blank"
              >
                best time to visit Havelock Island.
              </a>
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};
