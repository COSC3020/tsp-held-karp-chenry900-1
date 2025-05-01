
function tsp_hk(distance_matrix){
    var length = distance_matrix.length;
    var answer = Infinity;
    const memo = new Map();

    for (var i = 0; i < length; i++) {
        var cost = recursion(distance_matrix, i, memo,);
        answer = Math.min(answer, cost);
    }
    
    return answer;
}

function recursion(distance_matrix, currentCity, memo,) {
    var cost = Infinity;



    for (var i = 0; i < distance_matrix.length; i++) {
            var testCost = distance_matrix[currentCity][i] + recursion(distance_matrix, i, memo,);//copilot i did learn from this but i added this before using copilot to add the mask
            cost = Math.min(cost, testCost);
         }
    }
    return cost;
}
