import { calcRectParams } from "../utils/calc";
import Operator from "./Operator";

export default class SelectRectangele extends Operator {
  constructor(cnv: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    super(cnv, ctx);
  }
  public draw(drawPosition: DrawPosition): void {
    const params: {
      x: number;
      y: number;
      width: number;
      height: number;
    } = calcRectParams(drawPosition, this.cnvStyle);
    const ctx = this.ctx;
    ctx.setLineDash([3, 2]);
    ctx.lineCap = "square";
    ctx.strokeRect(params.x, params.y, params.width, params.height);
  }
}
