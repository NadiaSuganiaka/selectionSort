const arr = [40, 21, 55, 123, 4, 1, 8, 69];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j =i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
         let temp = arr[minIndex];
         arr[minIndex] = arr[i];
         arr[i] = temp;
    }
}
selectionSort(arr);
console.log(arr);    