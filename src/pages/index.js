import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{paddingTop:'200px'}}>
      <div className="container" >
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
          <div style={{width: '60%', margin: 'auto', fontWeight:'normal'}}>
            <p style={{fontSize: '50%'}}>Documentation Site Example for Discord Users</p>
            <p style={{fontSize: '50%'}}>Inspiration: Attempting *and failing* to come up with a time to meet with Instructor to go over some Discord Channel ideas involving class discussions</p>
            <ul style={{fontSize: '50%',textAlign: 'center', fontWeight:'bold', listStyle:'none'}} >Accessiblity Features:
              <li style={{fontWeight:'normal'}}>Alt Text on all images!</li>
              <li style={{fontWeight:'normal'}}>Light/Dark Mode</li>
              <li style={{fontWeight:'normal'}}>Site Navigation</li>
            </ul>
          </div>
        </Heading>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Click Me to Start!
          </Link>
        </div>
        <div style={{textAlign: 'start', margin:'auto', width:'70%', paddingBottom:'70px'}}>
          <br></br>
          <h3>
            Sources:
          </h3>
          <p>Discord Documentation: https://support.discord.com/hc/en-us/articles/6208479917079-Forum-Channels-FAQ</p>
          <p>Docusaurus Wiki: https://docusaurus.io</p>
          <p>Mac Screenshot and Editing Tools: https://www.youtube.com/watch?v=Z5krxaLgkfo</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
