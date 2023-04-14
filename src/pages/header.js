import React from 'react';
import styles from './../styles/header.module.scss';
import Card from '@/pages/components/Card';
const Header = () => {
  return (
    <div className="container">
      <div className={styles.headerContainer}>
        <div className={styles.wrapperLeft}>
          <img
            src="data:image/png;base64,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"
            alt=""
            width={80}
            height={80}
          />
          <ul className={styles.lists}>
            <li className="list_item">
              <span>Home</span>
            </li>
            <li className="list_item">
              <span>Products</span>
            </li>
            <li className="list_item">
              <span>Resources</span>
            </li>
            <li className="list_item">
              <span>Pricing</span>
            </li>
          </ul>
        </div>

        <div className={styles.wrapperright}>
          <div className={styles.btnLogin}>Login</div>
          <div className={styles.btnsignup}>Sign up</div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className="slider-heading">
          <h3 className={styles.slider_heading_name}>The blog</h3>
          <h3 className={styles.slider_title}>Writing from our team</h3>
          <div className={styles.sider_headingDesc}>
            The lasted industry news, interviews, technology, and resource
          </div>
        </div>
        <img
          width={'100%'}
          height={500}
          src="https://i0.wp.com/www.richie.ie/wp-content/uploads/Jessica-McMurray-1s.jpg"
          alt=""
        />
      </div>

      <div className="products">
        <Card
          img={
            'https://th.bing.com/th/id/OIP.4qfFgEVczKHB9KWkYnQSEwHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7'
          }
          title={'Phoenix Baker 19-2-2023'}
          heading="Migrating to Linear 101"
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          }
          list={[{ text: 'Products' }, { text: 'Tools' }, , { text: 'Sass' }]}
        />

        <Card
          img={
            'https://th.bing.com/th/id/OIP.4qfFgEVczKHB9KWkYnQSEwHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7'
          }
          title={'Phoenix Baker 19-2-2023'}
          heading="Migrating to Linear 101"
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          }
          list={[{ text: 'Products' }, { text: 'Tools' }, , { text: 'Sass' }]}
        />

        <Card
          img={
            'https://th.bing.com/th/id/OIP.4qfFgEVczKHB9KWkYnQSEwHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7'
          }
          title={'Phoenix Baker 19-2-2023'}
          heading="Migrating to Linear 101"
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          }
          list={[{ text: 'Products' }, { text: 'Tools' }, , { text: 'Sass' }]}
        />
          <Card
          img={
            'https://th.bing.com/th/id/OIP.4qfFgEVczKHB9KWkYnQSEwHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7'
          }
          title={'Phoenix Baker 19-2-2023'}
          heading="Migrating to Linear 101"
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          }
          list={[{ text: 'Products' }, { text: 'Tools' }, , { text: 'Sass' }]}
        />
          <Card
          img={
            'https://th.bing.com/th/id/OIP.4qfFgEVczKHB9KWkYnQSEwHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7'
          }
          title={'Phoenix Baker 19-2-2023'}
          heading="Migrating to Linear 101"
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          }
          list={[{ text: 'Products' }, { text: 'Tools' }, , { text: 'Sass' }]}
        />
          <Card
          img={
            'https://th.bing.com/th/id/OIP.4qfFgEVczKHB9KWkYnQSEwHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7'
          }
          title={'Phoenix Baker 19-2-2023'}
          heading="Migrating to Linear 101"
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          }
          list={[{ text: 'Products' }, { text: 'Tools' }, , { text: 'Sass' }]}
        />
      </div>
    </div>
  );
};

export default Header;
