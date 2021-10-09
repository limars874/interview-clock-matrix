export function traverseClock(input: number[][]) {
  let outIndex = 0,
    innerIndex = 0;
  const outlen = input.length;
  const innerLen = input[0]?.length;
  if (!innerLen) {
    return [];
  }
  let leftEdge = 0,
    rightEdge = innerLen - 1,
    upEdge = 0,
    downEdge = outlen - 1;
  let direction: 'left' | 'right' | 'down' | 'up' = 'right';
  const ret: number[] = [];

  while (true) {
    if (leftEdge > rightEdge || upEdge > downEdge) {
      return ret;
    }
    if (direction === 'right') {
      const ele = input[outIndex][innerIndex];
      if (innerIndex >= rightEdge) {
        if (innerIndex === rightEdge) {
          ret.push(ele);
        }
        direction = 'down';
        outIndex++;
        upEdge++;
        continue;
      } else {
        ret.push(ele);
        innerIndex++;
      }
    }
    if (direction === 'down') {
      const ele = input[outIndex][innerIndex];
      if (outIndex >= downEdge) {
        if (outIndex === downEdge) {
          ret.push(ele);
        }
        direction = 'left';
        rightEdge--;
        innerIndex--;
        continue;
      } else {
        ret.push(ele);
        outIndex++;
      }
    }
    if (direction === 'left') {
      const ele = input[outIndex][innerIndex];
      if (innerIndex <= leftEdge) {
        if (innerIndex === leftEdge) {
          ret.push(ele);
        }
        direction = 'up';
        downEdge--;
        outIndex--;
        continue;
      } else {
        ret.push(ele);
        innerIndex--;
      }
    }

    if (direction === 'up') {
      const ele = input[outIndex][innerIndex];
      if (outIndex <= upEdge) {
        if (outIndex === upEdge) {
          ret.push(ele);
        }
        direction = 'right';
        leftEdge++;
        innerIndex++;
        continue;
      } else {
        ret.push(ele);
        outIndex--;
      }
    }
  }
}
