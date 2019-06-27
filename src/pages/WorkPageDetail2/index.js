
import React, { Component } from 'react';
import styles from './detail.module.scss';

export default () =>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
                <h1>Web Develop</h1>

            </div>
            <section className={ styles.content }>
                <p>
                    1. Construct a page using HTML and CSS
                </p>
                <p>
                    2. Use ajax, JSON and so on technology to import data from backend
                </p>
                <p>
                    3. Using Javascript to design some pages like login pages
                </p>
            </section>
        </div>
    </div>
}
