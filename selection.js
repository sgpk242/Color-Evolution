function selection() {
     // Choose 6 members to mate
     var max1 = 99;
     var max2 = 100;
     var max3 = 101;
     var one, two, three; 
     for (var k = 0; k < objArray.length; k++) {
        if (objArray[k].fitness < max1) {
            one = k;
            max1 = objArray[k].fitness;
        } 
        if (objArray[k].fitness < max2 && objArray[k].fitness > max1) {
            two = k;
            max2 = objArray[k].fitness;
        }
        if (objArray[k].fitness < max3 && objArray[k].fitness > max2) {
            three = k;
            max3 = objArray[k].fitness;
        }
     }
     
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
     for (var k = 0; k < objArray.length; k++) {
        if (objArray[k].fitness > max1) {
            bad1 = k;
            max1 = objArray[k].fitness;
        } 
        if (objArray[k].fitness > max2 && objArray[k].fitness < max1) {
            bad2 = k;
            max2 = objArray[k].fitness;
        }
        if (objArray[k].fitness > max3 && objArray[k].fitness < max2) {
            bad3 = k;
            max3 = objArray[k].fitness;
        }
     }
     
     // Return array
     var arr = new Array();
     arr[0] = one;
     arr[1] = two;
     arr[2] = three;
     arr[3] = four;
     arr[4] = five;
     arr[5] = six;
     arr[6] = bad1;
     arr[7] = bad2;
     arr[8] = bad3;
     return arr;
}
