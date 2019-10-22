import { Injectable } from '@angular/core';


export class LoggerService {

  constructor() { }
  info(message) {
    console.info(message);
  }
  logger(message) {
    console.log(message);
  }

}
