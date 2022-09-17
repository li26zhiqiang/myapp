

export default function maopaosort (arr) {

    for (let i = 0; i< arr.length - 1; i++) {
        for (let n = i+ 1; n<arr.length; n++) {
            let a = arr[n]
            if (arr[i]>arr[n]) {
                arr[n] = arr[i];
                arr[i] = a;
            }
        }        
    }
    console.log("arr", arr)
}