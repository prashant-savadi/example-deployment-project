import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template : `
  <h2>::-------------------------------Test build by Prashant Savadi----------------------------------::</h2>

  <h3> This is Angular 4 Project!!</h3>

  `,
  styles: [ `
h3 {
  text-decoration: underline;
}

h2, h3 {
  color:#00ad7d;
}
`],

})
export class AppComponent {
  title = 'app';


}
