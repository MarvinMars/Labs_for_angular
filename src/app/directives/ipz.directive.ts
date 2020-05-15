import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appIpz]'
})
export class IpzDirective {
  @Input('appIpz') color: string;
  @Input() dStyle: {marginTop?: string};
  @Input() title: string;
  constructor(private el: ElementRef, private r: Renderer2) {
  }
  @HostListener('mouseenter', ['$event.target']) onMouseEnter() {
    this.r.setStyle(this.el.nativeElement,'color',this.color);
    this.r.setStyle(this.el.nativeElement,'margin-top',this.dStyle.marginTop);
    this.r.setStyle(this.el.nativeElement,'font-weight','bold');
    this.r.setStyle(this.el.nativeElement,'font-size','19px');
    this.r.setStyle(this.el.nativeElement,'background-color','azure')

  }
  @HostListener('mouseleave', ['$event.target']) onMouseLive() {
    this.r.setStyle(this.el.nativeElement,'color',null);
    this.r.setStyle(this.el.nativeElement,'margin-top',null);
    this.r.setStyle(this.el.nativeElement,'font-weight',null);
    this.r.setStyle(this.el.nativeElement,'font-size',null);
    this.r.setStyle(this.el.nativeElement,'background-color',null)
  }
  // V1
  // @HostListener('click', ['$event.target']) onClick() {
  //   alert(`You clicked on `+ this.el.nativeElement.getElementsByTagName("h2")[0].innerText);
  // }
  // V2
  @HostListener('click', ['$event.target']) onClick() {
    alert(`You clicked on `+ this.title);
  }

}
