import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() {
  }

  cleanName(name: string) {
    return name.replace('/', '')
  }
}
