
import React, { Component } from 'react';
import styles from './home.module.scss';
import WorkLists from '../../components/WorkLists';
import worksData from '../works.json';

export default () =>{
    return <div className={ styles.wrap }>

        {/* 个人简介 */}
        <section className={ styles.brief }>
            <img src={ require("../../assets/images/avatar.jpg") } />
            <h2>XIN CHEN</h2>
            <ul>
                <li>software engineer</li>
                <li>full-stack developer</li>
            </ul>
            <p>I am a person who wants to become an excellent software developer.</p>
            <p>I am now looking for a full-time job.</p>
            <p>Contact me at x566chen@uwaterloo.ca</p>
        </section>


        <section className={ styles.work }>
            <div className={ styles.title }>
                <h3>Projects</h3>
            </div>
            <WorkLists dataSource = { worksData.data } />
        </section>

    </div>
}
