function greaterY(arr, Y) {
    //your code here
    var count = 0;

    for (var i = 0; i < arr.length; i++){
        if(arr[i]> Y){
            count = count +1;
        }
    }

    return count;
}
