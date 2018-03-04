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


    var j=1;
    result =[];

    for (i = 0; i < primitives.length; i++)
    { 
        var sum = 0;
        var n = number;
        while (n >= 1) {
            var temp = parseInt(n / primitives[i]);
            n = temp;
            sum = sum + temp;

        }
        if (primitives[i]==primitives[i+1])
    {
        j++;
    }
        result.push(Math.floor(sum / j));

    }

    console.log(result);
       return Math.min.apply(null, result);


}
