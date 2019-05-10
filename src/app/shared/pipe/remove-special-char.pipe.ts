import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:'RemoveSpecialCharPipe'
})
export class RemoveSpecialCharPipe implements PipeTransform{
    transform(value:string,character:string):string{
        return value.replace(character,'');
    }
}