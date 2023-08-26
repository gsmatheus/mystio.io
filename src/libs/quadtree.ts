interface QuadTreeNode {
  x: number;
  y: number;
  w: number;
  h: number;
  c: any[];
  l: any[];
  n: QuadTreeNode[];
}

interface Options {
  maxchildren?: number;
  leafratio?: number;
}

export class QuadTree {
  private root: QuadTreeNode;
  private maxchildren: number;
  private leafratio: number;

  constructor(x: number, y: number, w: number, h: number, options?: Options) {
    if (typeof x !== 'number' || isNaN(x)) x = 0;
    if (typeof y !== 'number' || isNaN(y)) y = 0;
    if (typeof w !== 'number' || isNaN(w)) w = 10;
    if (typeof h !== 'number' || isNaN(h)) h = 10;

    this.maxchildren = 25;
    this.leafratio = 0.5;
    if (options) {
      if (typeof options.maxchildren === 'number' && options.maxchildren > 0)
        this.maxchildren = options.maxchildren;
      if (typeof options.leafratio === 'number' && options.leafratio >= 0)
        this.leafratio = options.leafratio;
    }

    this.root = this.createNode(x, y, w, h);
  }

  private createNode(x: number, y: number, w: number, h: number): QuadTreeNode {
    return {
      x,
      y,
      w,
      h,
      c: [],
      l: [],
      n: [],
    };
  }
}
