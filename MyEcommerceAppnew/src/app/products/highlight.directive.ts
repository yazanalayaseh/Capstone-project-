import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective {
    private _defaultColor = 'blue';

    constructor(private el: ElementRef) {
    }

    @Input('myHighlight') highlightColor: string;

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.highlight(null);
    }

    private highlight(color: string): void {
        // access native element and change its style with given background color
        this.el.nativeElement.style.backgroundColor = color;
    }

}