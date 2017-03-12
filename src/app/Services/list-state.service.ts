import { Injectable } from '@angular/core';

@Injectable()
export class ListStateService {
  listState: Array<Boolean>;

  constructor() { }

  populateList() {
    this.listState.push(false);
  }

}
