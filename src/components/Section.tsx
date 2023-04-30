import React from 'react';
import styles from '../styles/Section.module.css';

export default function Section({color} : {color: string}) {
  return (
    <>
      <div className={styles.box}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat eaque harum necessitatibus deserunt laudantium totam eveniet, facere nobis repudiandae rem molestiae reiciendis rerum adipisci ipsum quisquam consequatur ex aspernatur veniam!</p>
        <button className={styles[color]}>버튼</button>
      </div> 
    </>
  )
}
