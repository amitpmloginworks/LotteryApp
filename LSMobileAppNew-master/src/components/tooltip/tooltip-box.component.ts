import { Component, Input, ElementRef, Renderer2, HostBinding, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'tooltip-box',
  template: '{{ text }}',
  styles: [
      `
          :host {
            background-color: white;
            color: black;
            display: inline-block;
            position: fixed;
            padding: 15px 25px;
            font-size: 15px;
            border-radius: 5px;
            max-width: 160px;
            text-align: center;
            align-items: center;
          }
    `,
      `
          :host.has-arrow:before {
              content: '';
              border: 5px solid transparent;
              position: absolute;
              width: 0;
              height: 0;
          }
    `,
    ':host.has-arrow.arrow-top:before { border-bottom: 5px solid white; top: -10px; }',
    ':host.has-arrow.arrow-left:before { border-right: 5px solid white; left: -10px; }',
    ':host.has-arrow.arrow-right:before { border-left: 5px solid white; right: -10px; }',
    ':host.has-arrow.arrow-bottom:before { border-top: 5px solid white; bottom: -10px; }'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipBox implements AfterViewInit {

  @Input()
  text: string;

  @Input()
  set arrow(side: string) {
    this.rnd.setAttribute(this.getNativeElement(), 'class', 'has-arrow ' + 'arrow-' + side);
  }

  @Input()
  set posTop(val: number) {
    this.rnd.setStyle(this.getNativeElement(), 'top', val + 'px');
  }

  @Input()
  set posLeft(val: number) {
    this.rnd.setStyle(this.getNativeElement(), 'left', val + 'px');
  }

  getNativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  init: Promise<void>;

  private initResolve: Function;

  constructor(public elementRef: ElementRef, private rnd: Renderer2) {
    this.init = new Promise<void>(resolve => {
      this.initResolve = resolve;
    });
  }

  ngAfterViewInit() {
    this.initResolve();
  }

}
