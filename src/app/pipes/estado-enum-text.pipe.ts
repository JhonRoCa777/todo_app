import { Pipe, PipeTransform } from '@angular/core';
import { Estado } from '../models/enums/Estado';

@Pipe({
  name: 'estadoEnumText'
})
export class EstadoEnumTextPipe implements PipeTransform {
  transform(value: Estado): string {
    return Estado[value];
  }
}
