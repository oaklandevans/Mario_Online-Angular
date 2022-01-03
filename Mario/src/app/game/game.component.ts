import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  @ViewChild('myCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  
  private ctx!: CanvasRenderingContext2D;

  private image: HTMLImageElement = new Image();

  ngOnInit(): void {
    const context = this.canvas.nativeElement.getContext('2d');
    if (!context) {
          console.log("getContext('2d') failed");
    } else {
          this.ctx = context;
    }
    this.image.src = '/assets/Pics/tube.png';
    this.image.onload = () => {
      this.createView();
   }
  }

  createView(): void {
    this.ctx.fillStyle = "lightblue";
		this.ctx.clearRect(0, 0, 1000, 500);
		this.ctx.fillRect(0, 0, 1000, 500);

    this.ctx.fillStyle = "lightgreen";
		this.ctx.clearRect(0, 400, 1000, 150);
		this.ctx.fillRect(0, 400, 1000, 400);

    this.ctx.drawImage(this.image, 300, 200);
  }

}
