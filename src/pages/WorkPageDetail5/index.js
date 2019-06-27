
import React, { Component } from 'react';
import styles from './detail.module.scss';

export default () =>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
                <h1>Social Media Content & Product Information Solution</h1>

            </div>
            <section className={ styles.content }>
                <p>
                    1. Help members from the IT department at Wolseley Canada to identifying a tool that will allow
                    employees from across the country to contribute their knowledge and expertise to one central real
                    time location
                </p>
                <p>
                    2. Contact with clients
                </p>
            </section>
        </div>
    </div>
}
