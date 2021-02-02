import React, {useState} from "react";
import s from "./style.module.scss";
import { Plus } from "react-bootstrap-icons";
import * as actions from "../../action";
import { connect } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from '../accordion-item';




const TodoList = (props) => {

  const [text, setText] = useState('');

   
  const createObj = () =>{
    const date = Date.now();
    props.addItemToList(props.obj.id, {id: date, title: text, note: '', date: '', priority: 'Нет'});
    props.obj.list.push({id: date, title: text, note: '', date: '', priority: 'Нет'})
  }

  return (
    <div className={`${s.wrapper}`}>
      <button className={'btn btn-warning'} onClick={()=>{props.showList()}}>Закрыть</button>
      <div className={s.content}>
        <div className={s.input}>
          <button 
            className="btn btn-success" 
            onClick={()=>{if(text){createObj()}}}>
            <Plus />
          </button>
          <input type="text" className='w-100' onChange={(e)=>{setText(e.target.value)}}/>
        </div>

        <Accordion className={s.Accordion}>
          {
            props.obj.list.map((item)=>{
                return <AccordionItem 
                key={item.id} 
                id={item.id} 
                title={item.title} 
                objCard={props.obj} 
                getDeleteId={props.getDeleteId}
                priority={item.priority}
                note={item.note}
                date={item.date}
                />
            })
          }
        </Accordion>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, actions)(TodoList);
