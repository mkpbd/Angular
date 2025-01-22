import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {



  handleClick(event: Event){
      console.log(event.target);
  }

  handleInput(event: HTMLInputElement): void {
    console.log(event.value );
  }

  handleOnchange(event: any): void {
    console.log(event.target.value);
  }

  handleMousedown(event: MouseEvent): void {
    console.log(event.type );
  }

  handleMouseup(event: MouseEvent): void {
    console.log(event.type );
  }

  handleMousemove(event: MouseEvent): void {
    console.log(event.clientX, event.clientY );
  }

  handleKeydown(event: KeyboardEvent): void {
    console.log(event.key );
  }

  handleKeyup(event: KeyboardEvent): void {
    console.log(event.key );
  }

  handleKeypress(event: KeyboardEvent): void {
    console.log(event.key );
  }
  handleWheel(event: WheelEvent): void {
    console.log(event.deltaY );
  }

  handleDrag(event: DragEvent): void {
    console.log(event.clientX, event.clientY );
  }

  handleDrop(event: DragEvent): void {
    event.preventDefault();
    // console.log(event.dataTransfer.getData('text') );
  }
  handleCopy(event: ClipboardEvent): void {
    console.log(event?.clipboardData?.getData('text') );

  }
  handleCut(event: ClipboardEvent): void {
    console.log(event?.clipboardData?.getData('text') );
  }
  handlePaste(event: ClipboardEvent): void {
    console.log(event?.clipboardData?.getData('text') );
  }
  handleFocus(event: FocusEvent): void {
    console.log(event.target );
  }
  handleBlur(event: FocusEvent): void {
    console.log(event.target );
  }
  handleLoad(event: Event): void {
    console.log(event.type );
  }
  handleError(event: ErrorEvent): void {
    console.log(event.error );
  }
  handleAbort(event: Event): void {


    console.log(event.type );
  }


  handleResize(event: UIEvent): void {
    console.log(event.target );
    console.log(window.innerWidth, window.innerHeight );

  }
  handleScroll(event: UIEvent): void {
    console.log(event.target );
    console.log(window.scrollX, window.scrollY );
    }
    handleSelect(event: Event): void {
    console.log(event.target );
    console.log(event.type );
  }



}
