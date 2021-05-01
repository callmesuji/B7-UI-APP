import { Directive,HostListener,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTransform]'
})
export class TransformDirective {
  @Input("appTransform") format : string = "";

  constructor(private ele : ElementRef) { }
  
  @HostListener("blur") onBlur(){
    let value :string = this.ele.nativeElement.value;

    if(this.format == 'upper'){
        this.ele.nativeElement.value = value.toUpperCase();
    }else
        this.ele.nativeElement.value = value.toLowerCase();    
  }


}
