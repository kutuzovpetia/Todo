import React,{useState} from 'react';
import s from './style.module.scss';
import { connect } from "react-redux";
import * as actions from "../../action.js";
import Card from '../card';
import ItemList from '../list-item';
import CreateModule from '../create-modal';
import TodoList from '../todoList';


const Content = (props) => {

    const [obj, setObj] = useState(null);
    // console.log(obj);
    const elements = props.data.map((item)=>{
        if(!props.display){ return <Card  setObj={setObj}  key={item.id} id={item.id} title={item.title} list={item.list}></Card> }
        else{ return <ItemList key={item.id} id={item.id} title={item.title}></ItemList> }
    })

    return(
        <div className={props.display ? s.contentWrapperList : s.contentWrapperBlock}>
            { elements }
            { props.showCreateList ? <CreateModule/> : null}
            { props.onList ? <TodoList obj={obj}/> : null }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      data : state.data,
      display : state.display,
      showCreateList : state.showCreateList,
      onList : state.onList
    };
}

export default connect(mapStateToProps, actions)(Content);


