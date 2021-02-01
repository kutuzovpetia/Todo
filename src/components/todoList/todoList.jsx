import React from "react";
import s from "./style.module.scss";
import { Plus } from "react-bootstrap-icons";
import * as actions from "../../action";
import { connect } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from '../accordion-item';

const TodoList = (props) => {

  return (
    <div className={`${s.wrapper}`}>
      <button className={'btn btn-warning'} onClick={()=>{props.showList()}}>Закрыть</button>
      <div className={s.content}>
        <div className={s.input}>
          <button className="btn btn-success">
            <Plus />
          </button>
          <input type="text" className='w-100'/>
        </div>

        <Accordion className={s.Accordion}>
          {
            props.obj.list.map((item)=>{
                return <AccordionItem key={item.id} id={item.id} title={item.title}/>
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
