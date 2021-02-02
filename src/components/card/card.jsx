import React from "react";
import s from "./style.module.scss";
import { connect } from "react-redux";
import * as actions from "../../action";
import CardBoot from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'


const Card = (props) => {
  
  return (
    <CardBoot 
    bg={'dark'} 
    text={'white'}  
    className={s.card} 
    onClick={()=>{props.showList(); props.setObj(props.data.find(item => item.id === props.id))}} // Возврат списка !!!
    >
      <div className='d-flex justify-content-between align-items-center mr-3'>
      <CardBoot.Header>{props.title}</CardBoot.Header>
      <span>{new Date().toLocaleDateString()}</span>
      </div>
      
      <CardBoot.Body className={s.listGroup}>
        
        <ListGroup >
        {
          props.list.slice(0, 5).map((item)=>{
            return <ListGroup.Item  key={item.id} variant="info">
              <div className='d-flex justify-content-between m-0'>
                <p>{item.title}</p>
                <p>{item.date}</p>
              </div>
            </ListGroup.Item>
          })
        }
        
       </ListGroup>
      
      </CardBoot.Body>
    </CardBoot>
  );
};

const mapStateToProps = (state) => {
  return {
    logining: state.accountLogin,
    data: state.data,
    onList: state.onList,
  };
};

export default connect(mapStateToProps, actions)(Card);
