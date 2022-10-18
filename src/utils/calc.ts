// 计算矩形起始点x,y和宽高widht,height，对边界情况进行处理
export function calcRectParams(
  position: DrawPosition,
  cnvStyle: CnvStyle,
  linewidth: number = 1
) {
  let x = position.start.x - cnvStyle.left;
  if (x < 0) {
    x = 0;
  } else if (x > cnvStyle.width) {
    x = cnvStyle.width;
  }
  let y = position.start.y - cnvStyle.top;
  if (y < 0) {
    y = 0;
  } else if (y > cnvStyle.height) {
    y = cnvStyle.height;
  }
  let width = position.end.x - position.start.x;
  if (width >= 0) {
    if (x + width > cnvStyle.width) {
      width = cnvStyle.width - x - linewidth;
    } else if (x + width < x) {
      width = x - linewidth;
    }
  } else {
    if (x + width < 0) {
      width = -x + linewidth;
    }
  }
  let height = position.end.y - position.start.y;
  if (height >= 0) {
    if (y + height > cnvStyle.height) {
      height = cnvStyle.height - y - linewidth;
    } else if (y + height < y) {
      height = y - linewidth;
    }
  } else {
    if (y + height < 0) {
      height = -y + linewidth;
    }
  }
  return {
    x,
    y,
    width,
    height,
  };
}
