import React, { Component } from 'react';
import * as actions from '../action';
import { connect } from "react-redux";

export default class ApiService {

  _apiBase = "http://localhost:3000/api/todo";  

  // Получение всех GET
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  }

  // Создание списка POST
  async create(url, body) {
    
    const res = await fetch(`${this._apiBase}${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
      }
      const content = await res.json();
      console.log(content.todo);
      return content;
  }

  // Удаление DELETE
  async delete(url, id) {
   const res = await fetch(`${this._apiBase}${url}${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    return await res;
  }

  // Удаление задачи из списка
  async delTask(url, id1, id2) {
    const res = await fetch(`${this._apiBase}${url}${id1}/${id2}`, {
       method: "DELETE",
       headers: { "Content-Type": "application/json" },
     })
     return await res;
   }

  /*************************************************************************************/

  // Получение всех списков
  async getAllList() {
    const res = await this.getResource(`/all/`);
    return await res;
  }

  // Создание нового списка
  async createNewList(body) {
    const res = await this.create(`/new/`, body);
    return await res;
  }

  // Удаление
  async deleteById(id) {
    const res = await this.delete(`/delete/`, id);
    return await res;
  }

  // Удаление задачи из списка
  async deleteTask(id1, id2){
    const res = await this.delTask(`/del/`, id1, id2);
    return await res;
  }

  // Добавление задачи в список
  async addTask(id, body){
    const res = await this.create(`/add/${id}`, body)
    console.log(await res);
    return await res;
  }
}




