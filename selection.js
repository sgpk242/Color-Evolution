function selection(arr) {
     // Choose 3 most fit members of current generation
     var max1 = 99;
     var max2 = 100;
     var max3 = 101;
     var one, two, three; 
     for (var k = 0; k < arr.length; k++) {
        if (arr[k].fitness < max1) {
            one = k;
            max1 = arr[k].fitness;
        } 
        if (arr[k].fitness < max2 && arr[k].fitness > max1) {
            two = k;
            max2 = arr[k].fitness;
        }
        if (arr[k].fitness < max3 && arr[k].fitness > max2) {
            three = k;
            max3 = arr[k].fitness;
        }
     }
     
     // Choose random 3 members of population - THIS SHOULD BE CHANGED
     var four=0, five=0, six=0;
     while (one == two || two == three || three == four || four == five || five == six)
     {
             four = Math.floor(Math.random() * 100);
             five = Math.floor(Math.random() * 100);
             six = Math.floor(Math.random() * 100);
     }
    
     // Choose the worst 3 members to replace with offspring
     var max1 = -99;
     var max2 = -100;
     var max3 = -101;
     var bad1, bad2, bad3; 
     for (var k = 0; k < arr.length; k++) {
        if (arr[k].fitness > max1) {
            bad1 = k;
            max1 = arr[k].fitness;
        } 
        if (arr[k].fitness > max2 && arr[k].fitness < max1) {
            bad2 = k;
            max2 = arr[k].fitness;
        }
        if (arr[k].fitness > max3 && arr[k].fitness < max2) {
            bad3 = k;
            max3 = arr[k].fitness;
        }
     }
     
     // Return array - THIS CAN BE IMPROVED
     var return_arr = new Array();
     return_arr[0] = one;
     return_arr[1] = two;
     return_arr[2] = three;
     return_arr[3] = four;
     return_arr[4] = five;
     return_arr[5] = six;
     return_arr[6] = bad1;
     return_arr[7] = bad2;
     return_arr[8] = bad3;
     return return_arr;
}
