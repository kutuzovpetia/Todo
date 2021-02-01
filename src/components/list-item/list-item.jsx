import React from "react";
import s from "./style.module.scss";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import {TrashFill} from "react-bootstrap-icons"
import { connect } from 'react-redux';
import * as actions from '../../action';


const ItemList = (props) => {
  return (
    <Jumbotron  className={s.Jumbotron}>
      <Container className={'d-flex justify-content-between align-items-center'}>
        <h4>{props.title}</h4>
        <button 
        className='btn btn-danger' 
        onClick={()=>{props.deleteItem(props.id)}}
        ><TrashFill/></button>
      </Container>
    </Jumbotron>
  );
};

const mapStateToProps = (state) => {
    return {
      logining: state.accountLogin,
    };
};
  
export default connect(mapStateToProps, actions)(ItemList);
