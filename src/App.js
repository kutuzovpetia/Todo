import React, { useEffect } from "react";
import s from "./App.module.scss";
import HeaderNavMenu from "./components/header-nav-menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./components/content";
import { connect } from "react-redux";
import ApiService from "./service-api";
import * as actions from './action';

function App(props) {

  // useEffect(() => {

  //   fetch('http://localhost:3000/api/todo/add',{
  //     method: 'POST',
  //     headers:{'Content-Type': 'application/json'},
  //     body: JSON.stringify({title: 'Купить хлеба', list:'fgsdf'})
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // },[]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/todo',{
  //     method: 'GET',
  //     headers:{'Content-Type': 'application/json'},
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // },[]);


  useEffect(() => {
    const api = new ApiService();
    api.getAllList().then((res) => {
      props.setData(res.reverse());
    });
  }, []);

  return (
    <div className={s.App}>
      <HeaderNavMenu />
      <Content></Content>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showCreateList: state.showCreateList,
  };
};

export default connect(mapStateToProps, actions)(App);
