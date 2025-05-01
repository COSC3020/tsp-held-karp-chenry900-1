
function tsp_hk(distance_matrix){
    var length = distance_matrix.length;
    var answer = Infinity;
    var memo = new Map();
    var visited = [];


    for (var i = 0; i < length; i++) {
        for (var bol = 0; bol < length; bol++) {
            visited[bol] = false;
        }
        visited[i] = true;
        var cost = recursion(distance_matrix, i, memo, visited);
        answer = Math.min(answer, cost);
    }
    
    return answer;
}

function recursion(distance_matrix, currentCity, memo, visited) {
    var cost = Infinity;
    var key = "";
    var iter = 0;

    for (i = 0; i < distance_matrix.length; i++) {
        if (visited[i]) {
            key += i + ",";
        }
        if (i == currentCity) {
            key += i + ",";
        }
    }

    if (memo.has(key)) {
        return memo.get(key);
    }

    for (var i = 0; i < distance_matrix.length; i++) {
        if (visited[i]) {
            iter += 1;
        }
    }
    
   if (iter == distance_matrix.length) {
        return 0;
   }
    
    for (var i = 0; i < distance_matrix.length; i++) {
        if (visited[i] == false) {
            var testVisited = visited.slice();
            testVisited[i] = true;
            var testCost = distance_matrix[currentCity][i] + recursion(distance_matrix, i, memo, testVisited);
            cost = Math.min(cost, testCost);
         }
    }
    memo.set(key, cost);
    return cost;
}
