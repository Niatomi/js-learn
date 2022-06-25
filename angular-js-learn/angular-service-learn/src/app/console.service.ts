import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsoleService {
  log(string: string) {
    console.log(string);
  }

  constructor() {}
}
