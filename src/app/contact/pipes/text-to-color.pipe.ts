import { Pipe, PipeTransform } from '@angular/core';
import {first} from 'rxjs/operators';

@Pipe({
  name: 'textToColor'
})
export class TextToColorPipe implements PipeTransform {

  defaultColor = '#66BB6A';
  colors = {
    'a': '#EC407A',
    'b': '#FFEE58',
    'c': '#EC407A',
    'd': '#FFEE58',
    'e': '#EC407A',
    'f': '#FF5722',
    'g': '#8D6E63',
    'h': '#8D6E63',
    'i': '#AB47BC',
    'j': '#FF7043',
    'k': '#AB47BC',
    'l': '#FFA726',
    'm': '#AB47BC',
    'n': '#AB47BC',
    'o': '#FFCA28',
    'p': '#AB47BC',
    'q': '#5C6BC0',
    'r': '#FF7043',
    's': '#5C6BC0',
    't': '#D4E157',
    'u': '#26A69A',
    'v': '#FFCA28',
    'w': '#26A69A'
  };

  transform(value: any, args?: any): any {
    if (value == null || value === '') {
      return this.defaultColor;
    }
    const firstChar = value.charAt(0).toLowerCase();
    return this.colors[firstChar];
  }

}
