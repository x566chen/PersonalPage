
import React, { Component } from 'react';
import styles from './detail.module.scss';

export default () =>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
                <h1>Data Analysis</h1>

            </div>
            <section className={ styles.content }>
                <p>
                    1. Construct E-R diagram
                </p>
                <p>
                    2. Clean and index data
                </p>
                <p>
                    3. Clustering algorithms such as: 1. K – means clustering 2. Hierarchical clustering 3. DBSCAN
                </p>
            </section>
        </div>
    </div>
}
