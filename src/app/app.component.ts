import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template : `
  <h2>::-------------------------------CSS----------------------------------::</h2>

  <h3> This is reday to deploy build!!</h3>

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
