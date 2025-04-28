function tsp_hk(distance_matrix){
    var length = distance_matrix.length;
    var memorize = Array(length).fill().map(() => Array(1 << length).fill(-1));//copilot
    var answer = Infinity;
    
    
    for (var o = 0; o < length; o++) {
        var visitedMask = 1 << o;//copilot
        var cost = recursion(distance_matrix, memorize, o, visitedMask);
        answer = Math.min(answer, cost);
    }
    
return answer;
}

function recursion(distance_matrix, memorize, current, visitedMask) {
    if (visitedMask == (1 << distance_matrix.length) - 1) {//copilot
        return 0;
    }

    if (memorize[current][visitedMask] != -1) {//copilot
        return memorize[current][visitedMask];
    }

    var cost = Infinity;

    for(var i = 0; i < distance_matrix.length; i++) {
        if ((visitedMask & (1 << i)) == 0) {//copilot
            var newVisitedMask = visitedMask | (1 << i);//copilot
            var newCost = distance_matrix[current][i] + recursion(distance_matrix, memorize, i, visitedMask);
            cost = Math.min(cost, newCost);
        }
    }

    memorize[current][visitedMask] = cost; //copilot
    return cost;
}
