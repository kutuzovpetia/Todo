import React from "react";
import s from "./style.module.scss";
import { ListTask, Check2, Search, List, Grid } from "react-bootstrap-icons";
import {connect} from 'react-redux';
import * as actions from '../../action';


const HeaderNavMenu = (props) => {


  return (
    <nav className={s.wrapper}>
      <button 
      className={"btn btn-primary"}
      onClick={()=>{props.sCreateList()}}
      >Создать список</button>

      <div className={s.centerControls}>
        <button className={"btn btn-secondary"}>{`Списки ${0}`}</button>
        <button className={"btn btn-secondary"}>{`Запланировано ${0}`}</button>
        <button className={"btn btn-secondary"}>{`Сегодня ${0}`}</button>
      </div>

      <div className={s.rightControls}>
        <button className={"btn btn-secondary"} onClick={props.setDisplay}>
          { props.display ? <ListTask /> : <Grid/> }
        </button>
        <button className={"btn btn-secondary"}>
          <Check2 />
        </button>
        <button className={"btn btn-secondary"}>
          <Search />
        </button>
        <button className={"btn btn-secondary"}>
          <List />
        </button>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    display: state.display
  };
};

export default connect(mapStateToProps, actions)(HeaderNavMenu);
