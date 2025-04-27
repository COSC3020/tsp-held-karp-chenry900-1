function tsp_hk(distance_matrix) {
    var visited = [];
    var testCost = 0;
    var count = 1;
    var answer = Infinity;
    var memorize = {};// copilot

    for (var startCity = 0; startCity < distance_matrix.length; startCity++) {
        for (var i = 0; i < distance_matrix.length; i++) {
            visited[i] = false;
        }
        visited[startCity] = true;
        testCost = recursive(distance_matrix, visited, startCity, 0, count, memorize);
        if (answer > testCost) {
            answer = testCost;
        }
    }
        
    return answer;
}

function recursive(distance_matrix, visited, city, testCost, count, memorize) {
    var cities = distance_matrix.length;

    if (count == cities) {
        return testCost;
    }

    var memorizeKey = visited.join(",") +"-" + city;//copilot
    if (memorize[memorizeKey] !== undefined) {//copilot
        return memorize[memorizeKey];//copilot
    }

    var answer = Infinity;

    for (var i = 0; i < cities; i++) {
        if (visited[i] == false) {
            visited[i] = true;
            var addedCost = testCost + distance_matrix[city][i];
            var totalCost = recursive(distance_matrix, visited, i, addedCost, (count +1), memorize);  
            if (answer > totalCost) {
                answer = totalCost;
            }
            visited[i] = false;
        }
    }
    memorize[memorizeKey] = answer; //copilot

    return answer;
}
