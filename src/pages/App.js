import React, { Component } from 'react';
import styles from './App.module.scss';
import { Link,Route,withRouter } from 'react-router-dom';
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkPageDetail from './WorkPageDetail';
import WorkPageDetail2 from './WorkPageDetail2';
import WorkPageDetail3 from './WorkPageDetail3';
import WorkPageDetail4 from './WorkPageDetail4';
import WorkPageDetail5 from './WorkPageDetail5';
import WorkPageDetail6 from './WorkPageDetail6';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.App}>

         {/* 头部导航 */}
         <header className={styles.header}>
            <div className={styles.box}>
               <Link to="/"><div className={styles.boxleft}>Personal Website</div></Link>
               <div className={styles.boxright}>
                  <Link to="/"><p className={ location.pathname==="/" ? styles.selected : null }>HOME</p></Link>
                  <Link to="/works"><p className={ location.pathname==="/works" ? styles.selected : null } >Projects</p></Link>
               </div>
            </div>
         </header>

         {/* 内容区 */}
         <section className={styles.content}>
           <Route path="/" exact component={ HomePage } />
           <Route path="/works" exact component={ WorkPage } />
           {/*<Route path="/works/:id" exact component={ WorkPageDetail } />*/}
           <Route path="/works/1" exact component={ WorkPageDetail } />
           <Route path="/works/2" exact component={ WorkPageDetail2 } />
           <Route path="/works/3" exact component={ WorkPageDetail3 } />
           <Route path="/works/4" exact component={ WorkPageDetail4 } />
           <Route path="/works/5" exact component={ WorkPageDetail5 } />
           <Route path="/works/6" exact component={ WorkPageDetail6 } />

         </section>

         {/* 底部 */}
         <footer className={styles.footer}>
           <p>© <b>2019 Xin chen</b></p>
           <p>Handmade with</p>
         </footer>
      </div>
    );
  }
}

export default withRouter(App);
