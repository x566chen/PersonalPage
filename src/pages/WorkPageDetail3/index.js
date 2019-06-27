
import React, { Component } from 'react';
import styles from './detail.module.scss';

export default () =>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
                <h1>Vertex Cover Problem</h1>

            </div>
            <section className={ styles.content }>
                <p>
                    1. Writing Python to help the local police department with their installation of security cameras at traffic
                    intersections
                </p>
                <p>
                    2. Minimize the number of cameras for the police
                </p>
                <p>
                    3. Write a program in C++ to generate random input for your Python script
                </p>
                <p>
                    4. Write code in C++ to create a adjacency list and use Breadth-First Search to find a Shortest-path
                </p>
                <p>
                    5. Write a driver program in C++ that uses Inter-Process Communication (IPC) to link the output of the
                    random input generator to the input of the Python script, and the output of the Python script to the
                    input of the C++ program which can fine the shortest-path
                </p>
                <p>
                    6. Create a polynomial reduction of the decision version of VERTEX COVER to CNF-SAT
                </p>
                <p>
                    7. Implement the reduction and use minisat as a library to solve the minimum VERTEX COVER
                    problem
                </p>
            </section>
        </div>
    </div>
}
