/**
 * 冒泡排序
 * 时间复杂度：最好O(n)，最坏O(n^2)，平均O(n^2)
 * 空间复杂度：O(1)
 * 稳定
 */

function bubble_sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

/**
 * 快速排序
 * 时间复杂度：最好O(nlogn)，最坏O(n^2)，平均O(nlogn)
 * 空间复杂度：O(nlogn)
 * 不稳定
 */

function quick_sort(arr) {
    if (arr.length <= 1) return arr;
    let left = [], right = [], base = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= base) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [].concat(quick_sort(left), base, quick_sort(right));
}

/**
 * 插入排序
 * 时间复杂度： 最好O(n), 最坏O(n^2)，平均O(n^2)
 * 稳定
 */

function insertion_sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];

        let j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}
