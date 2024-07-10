import React from 'react'
import CategorySlayder from '../CategorySlayder/CategorySlayder';
import MailSlayder from '../MailSlayder/MailSlayder';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
// import styles from './Home.module.css';

export default function Home() {
  return <>
  <div className="container pt-5 pb-3">

  <MailSlayder></MailSlayder>
  </div>
  <CategorySlayder></CategorySlayder>
  <FeatureProducts/>    </>
  
}
