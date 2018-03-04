module.exports = function getZerosCount(number, base) {
  



    var primitives = [];
    var k = 2;

    function getPrimitives(base) {
        while (k <= base) {
            if (base % k == 0) {
                primitives.push(k);
                base = base / k;
            }
            else {
                k++
            }
            ;
        }
    }

    getPrimitives(base);
    primitives.reverse();
    console.log(primitives);
    console.log(primitives.length);

    var sum = 0;
    var j=1;


    for (i = 0; i < primitives.length; i++)
    { //

          while (number >= primitives[0]) {
            number = parseInt(number/ primitives[i]);
              sum = sum + number;

        }
        if (primitives[i]==primitives[i+1])
        {
            j++;
        }



    }
    console.log(j, 'j');
    console.log(sum, '=sum');
    if (j>3){
        return Math.floor(sum/j);
    }
    else { return sum;}
}


