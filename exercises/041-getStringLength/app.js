"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStringLength(string) {
    let count = 0;
    while (string.slice(count, count + 1) !== "") {
        count++;
    }
    return count;
}
