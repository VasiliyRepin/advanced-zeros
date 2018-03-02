module.exports = function getZerosCount(number, base) {
  // your implementation
    function getPrimitives(base) {
        var k = base;
        var obj = {};
        for (var i = 2; i <= k; i++) {
            while (k % i == 0) {
                if (obj[i]) obj[i]++;
                else obj[i] = 1;
                k /= i;
            }
        }
        return obj;
    }

    var primitiv = getPrimitives(base);
    var result = [];

    for (var key in primitiv) {
        var count = 0;
        var n = number;
        while (n >= 1) {
            var temp = Math.floor(n / key);
            n = temp;
            count += temp;
        }
        result.push(Math.floor(count / primitiv[key]));
    }

    return Math.min.apply(null, result);


}
/*



    var primitives=[];
    var k = 2;
    function getPrimitives(base)
    {
        while(k<=base)
        {
            if (base % k==0)
            {
                primitives.push(k);
                base=base/k;
            }
            else
            { k++};
        }
    }
    getPrimitives(base);
    console.log(primitives);
    var sum =0;
    results = [];
    for (i =0; i<primitives.length; i++) {
        /*while (number >= primitives[i]) {
            number = parseInt(number / primitives[i]);
            sum = sum + number;




        var count = 0;
        var n = number;
        while (n >= 1) {
            var temp = Math.floor(n / i);
            n = temp;
            count += temp;
        }
        results.push(Math.floor(count / primitives[i]));
    }

    return Math.min.apply(null, results);

*/

