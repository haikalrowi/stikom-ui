import styles from "./styles.module.css";
import Heading from "@theme/Heading";
import clsx from "clsx";

type FeatureItem = {
  Title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  Description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    Title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    Description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    Title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    Description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    Title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    Description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Title, Svg, Description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg
          className={styles.featureSvg}
          role="img"
          style={{
            filter: "grayscale(1)",
          }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{Title}</Heading>
        <p>{Description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
