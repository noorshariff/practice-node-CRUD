import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: any[],searchValue:string): any {
    return value.filter(function(hero){
      console.log(hero.name)
      return hero.name
     

    })
   
  }

}
