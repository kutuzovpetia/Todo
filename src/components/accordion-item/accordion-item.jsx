import React, { useState } from "react";
import s from "./style.module.scss";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import * as actions from '../../action';
import {connect} from 'react-redux';
import ApiService from '../../service-api';

const AccordionItem = (props) => {

  const deleteTask  = (idCArd,idItem) => {
    const api = new ApiService();
    api.deleteTask(idCArd, idItem);// Удаляем с базы
    props.deleteItemFromList(idItem, idCArd); // Удаляем из store
  }

  const [date, setDate] = useState(props.date);
  const [priority, setPriority] = useState(props.priority || 'Нет');
  
  let color = null;
    switch (priority) {
        case 'Низкий': color = s.priorityBlue;
            break;
        case 'Средний': color = s.priorityOrange;
            break;
        case 'Высокий': color = s.priorityRed;
            break;
        default:
            break;
    }

  return (
    <Card key={props.id} className={'mb-2'}>
      <Accordion.Toggle as={Card.Header} eventKey={props.id} className={color}>
        <div className="d-flex justify-content-between">
          {props.title}
          <div>
            <span className='mr-3'>{date}</span>
          </div>
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.id}>
        <Card.Body className="d-flex justify-content-between flex-wrap">
          <div>
            <h5>Заметки</h5>
            <textarea cols="25" rows="7" 
            defaultValue={props.note} 
            onChange={(e)=>{props.addNote(props.id, props.objCard.id, e.target.value);}}
            />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
          </div>
          <div>
            <h5>Дата выполнения</h5>
            <button onClick={()=>{setDate('Сегодня'); props.addDate(props.id, props.objCard.id, 'Сегодня')}} className='btn btn-dark mr-1'>Сегодня</button>
            <button onClick={()=>{setDate('Завтра'); props.addDate(props.id, props.objCard.id, 'Завтра')}}className='btn btn-dark mr-1'>Завтра</button>
            <input type="date" name="" id="" onChange={(e) => { setDate(e.target.value); props.addDate(props.id, props.objCard.id, e.target.value)}} className='btn btn-info' />
            <h5 className='mt-2'>Приоритет</h5>
            <DropdownButton id="dropdown-item-button" title={priority} className={s.dropDown}>
              <Dropdown.Item as="button" onClick={()=>{setPriority('Нет'); props.addPriority(props.id, props.objCard.id, 'Нет')}}>Нет</Dropdown.Item>
              <Dropdown.Item as="button" onClick={()=>{setPriority('Низкий'); props.addPriority(props.id, props.objCard.id, 'Низкий')}}>Низкий</Dropdown.Item>
              <Dropdown.Item as="button" onClick={()=>{setPriority('Средний'); props.addPriority(props.id, props.objCard.id, 'Средний')}}>Средний</Dropdown.Item>
              <Dropdown.Item as="button" onClick={()=>{setPriority('Высокий'); props.addPriority(props.id, props.objCard.id, 'Высокий')}}>Высокий</Dropdown.Item>
            </DropdownButton>
            <button 
              className={`${s.btnDelete} btn btn-danger`} 
              onClick={()=>{ deleteTask(props.objCard.id, props.id);}}>Удалить</button>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
  
};

export default connect(mapStateToProps, actions)(AccordionItem);
