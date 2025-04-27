function tsp_hk(distance_matrix) {
    var visited = [];
    var start = 0;
    var testCost = 0;
    var count = 1;
    var answer = Infinity;

    for (var startCity = 0; startCity < distance_matrix.length; startCity++) {
        for (var i = 0; i < distance_matrix.length; i++) {
            visited[i] = false;
        }
        visited[startCity] = true;
        testCost = recursive(distance_matrix, visited, start, 0, count);
        if (answer > testCost) {
            answer = testCost;
        }
    }
        
    return answer;
}

function recursive(distance_matrix, visited, start, testCost, count) {
    var cities = distance_matrix.length;
    var addedCost = 0;

    if (cities == 2) {
        return distance_matrix[0][1];
    }
    if (count == cities) {
        return testCost;
    }

    var answer = Infinity;

    for (var i = 0; i < cities; i++) {
        if (visited[i] == false) {
            visited[i] = true;
            addedCost = testCost + distance_matrix[start][i];
            count++;
            var totalCost = recursive(distance_matrix, visited, i, testCost, count);  
            if (answer > totalCost) {
                answer = totalCost;
            }
            visited[i] = false;
        }
    }

    return answer;
}
