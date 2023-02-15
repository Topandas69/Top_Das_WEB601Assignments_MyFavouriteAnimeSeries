import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() styleOnHover: string = '';
  @Input() styleOnTags: string = '';

  constructor(private elm: ElementRef) {
  }

  ngOnInit(): void{
  }

  
  @HostListener('mouseenter') onMouseEnter(){
    if(this.styleOnHover != ''){
      this.elm.nativeElement.style.textDecoration = this.styleOnHover;
    }
    if(this.styleOnTags != ''){
      this.elm.nativeElement.style.fontWeight = this.styleOnTags;
    }
  }
  
  @HostListener('mouseleave') onMouseLeave(){
    this.elm.nativeElement.style.textDecoration = 'none';
    this.elm.nativeElement.style.fontWeight = 'Normal';
  }

}
