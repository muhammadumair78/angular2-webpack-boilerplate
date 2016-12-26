import { Pipe } from '@angular/core';

@Pipe({
  name: 'camelcasetonormal'
})
export class camelcasetonormal {
  transform(value: string) {
    return value.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
  }
}