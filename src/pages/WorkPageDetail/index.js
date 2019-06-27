
import React, { Component } from 'react';
import styles from './detail.module.scss';

export default () =>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
                <h1>Recognizing and Expressing Affect</h1>

            </div>
            <section className={ styles.content }>
                <p>
                    1. Explored several classification methods on a human facial expression dataset (more than 5000, download from the Internet）
                </p>
                <p>
                    2. Design emotional space and emotion calculation and establish models of facial expression change
                </p>
                <p>
                    3. Methods included Minimum Euclidean Distance classifier, K Nearest Neighbors classifier, Support Vector Machine classifier, Neural Network classifier and Convolutional Neural Network classifier
                </p>
            </section>
        </div>
    </div>
}
