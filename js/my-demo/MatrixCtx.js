"use strict";
const{ mat4 } = glMatrix;

export  default class MatrixCtx {
    constructor() {
        this.stack = [];
    }
    save(matrix) {
        this.stack.push(mat4.clone(matrix));
    }
    restore() {
        return this.stack.pop();
    }
}