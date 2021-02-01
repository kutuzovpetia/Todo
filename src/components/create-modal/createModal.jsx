import React, { useState } from "react";
import s from "./style.module.scss";
import { connect } from "react-redux";
import * as actions from "../../action";

const create = (t) => {
  return {
    id: Date.now(),
    title: t,
    dateOfCreation: new Date().toLocaleDateString(),
    list: [],
  };
};

const CreateModule = (props) => {

  const [title, setTitle] = useState();

  return (
    <div className={s.modalWrapper}>
      <div className={s.modal}>
        <h4>Создать список</h4>
        <input
          type="text"
          placeholder="Имя списка"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className={s.controls}>
          <button
            className={`btn btn-warning`}
            onClick={() => {
              props.sCreateList();
            }}
          >
            отмена
          </button>
          <button
            className={`btn btn-success`}
            onClick={() => {
              props.createList(create(title));
              props.sCreateList();
            }}
          >
            создать список
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, actions)(CreateModule);
