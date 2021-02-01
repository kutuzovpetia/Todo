import React from 'react';
import s from './App.module.scss';
import HeaderNavMenu from './components/header-nav-menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import {connect} from 'react-redux';

function App(props) {

  return (
    <div className={s.App}>
      <HeaderNavMenu/>
      <Content></Content>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showCreateList: state.showCreateList
  };
};

export default connect(mapStateToProps)(App);
