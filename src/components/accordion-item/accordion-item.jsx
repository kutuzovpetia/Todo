import React, { useState } from "react";
import s from "./style.module.scss";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const AccordionItem = (props) => {
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Нет")

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
          <span>{date}</span>
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.id}>
        <Card.Body className="d-flex justify-content-between flex-wrap">
          <div>
            <h5>Заметки</h5>
            <textarea name="" id="" cols="25" rows="7" />
          </div>
          <div>
            <h5>Дата выполнения</h5>
            <button onClick={()=>{setDate('Сегодня')}} className='btn btn-dark mr-1'>Сегодня</button>
            <button onClick={()=>{setDate('Завтра')}}className='btn btn-dark mr-1'>Завтра</button>
            <input type="date" name="" id="" onChange={(e) => { setDate(e.target.value);}} className='btn btn-info'/>
            <h5 className='mt-2'>Приоритет</h5>
            <DropdownButton id="dropdown-item-button" title={priority} className={s.dropDown}>
              <Dropdown.Item as="button" onClick={()=>{setPriority('Нет')}}>Нет</Dropdown.Item>
              <Dropdown.Item as="button" onClick={()=>{setPriority('Низкий')}}>Низкий</Dropdown.Item>
              <Dropdown.Item as="button" onClick={()=>{setPriority('Средний')}}>Средний</Dropdown.Item>
              <Dropdown.Item as="button" onClick={()=>{setPriority('Высокий')}}>Высокий</Dropdown.Item>
            </DropdownButton>
            <button className={`${s.btnDelete} btn btn-danger`} onClick={()=>{console.log(props.id)}}>Удалить</button>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default AccordionItem;
