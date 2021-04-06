import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <div className={styles.Header}>
      <header>
        <div>
          <h1>PA TODAY</h1>
          <h6>Come take a gander at Pierre-Alexandre</h6>
        </div>
        <nav>
          <a href='https://docs.google.com/document/d/1vFZR_OG6DPgd2B0JEEEYHKdozq1bqzoi7xJ333uPbKU/edit?usp=sharing' target='_blank'>
            <img className={styles.resume} src='https://img.icons8.com/ios/452/resume.png' />
          </a>
          <a href='https://github.com/lenuagebrun' target='_blank'>
            <img className={styles.iconlink} src='https://icons-for-free.com/iconfiles/png/512/code+collaboration+github+network+round+social+icon-1320086084536018107.png' /></a>
          <a href='https://www.linkedin.com/in/pierre-alexandre-julien-0308591b8/' target='_blank'>
            <img className={styles.iconlink} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/768px-Linkedin_icon.svg.png' /></a>
        </nav>
      </header>
    </div>
  )
}

export default Header;