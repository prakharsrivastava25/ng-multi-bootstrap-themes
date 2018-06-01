import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isMobile: any;
  constructor(){

      // to check whether the application is opened in one of the mentioned
    // mobile devices or not
    this.isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) ?
      navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)[0] :
      'Not a Mobile Browser';
       console.log("this.isMObile:"+this.isMobile);
      // console.log("typeof(this.isMobile:"+typeof(this.isMobile));

    // using navigator.userAgent property of WINDOW object to determent WebKit Compatability
    console.log("userAgent: ",window.navigator.userAgent);
    setTimeout(()=>{
    if((this.isMobile)=='iPhone'||(this.isMobile)=='iPad'){
      this.setTheme('Flatly');
    }
  },50);
  // if((this.isMobile)=='iPhone'||(this.isMobile)=='iPad'){
  //          this.setTheme('Minty');
  //        }
}
  // if((this.isMobile)=='iPhone'||(this.isMobile)=='iPad'){
  //        this.setTheme('Minty');
  //      }
  // }
  ngOnInit() {  }

  title = 'Custom Theming with Bootstrap 4';

  setTheme(theme: string) {
//    console.log("setTheme argument received in applicationCache.component.ts:"+theme);
    window['switchStyle'](theme);
    localStorage.setItem('myapp-theme', theme); // same key as in 'load-style.js'
    
  }

 

}
