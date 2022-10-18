// Toolbar.vue中的各项操作的抽象类
export default class Operator {
  readonly ctx: CanvasRenderingContext2D;
  readonly cnv: HTMLCanvasElement;
  readonly cnvStyle: CnvStyle;
  constructor(cnv: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.cnv = cnv;
    this.cnvStyle = {
      left: cnv.offsetLeft,
      top: cnv.offsetTop,
      width: cnv.width,
      height: cnv.height,
    };
  }
  // public draw(position: DrawPosition) {
  //   // 抽象方法
  // }
}
