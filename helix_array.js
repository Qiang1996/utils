/**
 * 螺旋数组
 */

// class Helix {
//     /**
//      * @param   {number}   二维数组的列和行
//      */
//     constructor(n, cw) {
//         this.n = n;
//         this.row = 0;
//         this.col = -1;
//         this.dir = 0;
//         this.order = [this.right, this.down, this.left, this.up];
//
//         this.map = [];
//         let i = 0;
//         for (; i < n; i++) {
//             this.map.push([]);
//         }
//
//         i = 0;
//
//         do {
//             this.order[this.dir % 4].call(this) ? i++ : this.dir++;
//             this.map[this.row][this.col] = i;
//         } while(i < n * n)
//     }
//
//     right() {
//         return this.move(this.row, this.col + 1);
//     }
//
//     down() {
//         return this.move(this.row - 1, this.col);
//     }
//
//     left() {
//         return this.move(this.row, this.col - 1);
//     }
//
//     up() {
//         return this.move(this.row + 1, this.col);
//     }
//
//     move(row, col) {
//         // 如果前进方向上的下一步的row和col都合理，并且下一步没有值，则可以前进
//         let isForward = (row >=0 && row < this.n) && (col >= 0 && col < this.n) &&
//             !this.map[row][col];
//
//         if (isForward) {
//             this.row = row;
//             this.col = col;
//             return true;
//         }
//
//         return false;
//     }
// }

let helix = {
    row: 0,
    col: -1,
    dir: 0,
    index: {},
    travel(map) {
        let order = [this.right, this.down, this.left, this.up];
        this.n = map.length, this.m = map[0].length;
        this.map = map;

        let i = 0;

        do {
             if (order[this.dir % 4].call(this)) {
                 i++;
                 console.log(map[this.row][this.col]);
             } else {
                 this.dir++;
             }

        } while(i < this.n * this.m);

        this.row = 0;
        this.col = -1;
        this.dir = 0;
    },
    right() {
        return this.move(this.row, this.col + 1);
    },
    down() {
        return this.move(this.row + 1, this.col);
    },
    left() {
        return this.move(this.row, this.col - 1);
    },
    up() {
        return this.move(this.row - 1, this.col);
    },
    move(row, col) {
        // 如果前进方向上的下一步的row和col都合理，并且下一步没有值，则可以前进
        let isForward = (row >=0 && row < this.n) && (col >= 0 && col < this.m) &&
            (!this.index[row] || !this.index[row].includes(col));

        if (isForward) {
            this.row = row;
            this.col = col;
            if (this.index[row]) {
                this.index[row].push(col);
            } else {
                this.index[row] = [col];
            }
            return true;
        }

        return false;
    }
}
