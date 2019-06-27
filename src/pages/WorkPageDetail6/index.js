
import React, { Component } from 'react';
import styles from './detail.module.scss';

export default () =>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
                <h1>Rainfall Forecast Analysis in Toronto</h1>

            </div>
            <section className={ styles.content }>
                <p>
                    1. Analyze the amount of rainfall over past several years and forecast the amount of that in the future
                </p>
                <p>
                    2. Construct AR, MA, ARIMA models
                </p>
                <p>
                    3. Using python to organize data and plot different models and future trend
                </p>
            </section>
        </div>
    </div>
}
