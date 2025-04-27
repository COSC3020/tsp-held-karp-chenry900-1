function tsp_hk(distance_matrix) {
    var visited = [];
    var start = 0;
    var testCost = 0;
    var count = 1;

    for (var i = 1; i < distance_matrix.length; i++) {
        visited[i] = false;
    }

    return recursive(distance_matrix, visited, start, testCost, count);
}

function recursive(distance_matrix, visited, start, testCost, count) {
    var cities = distance_matrix.length;

    if (cities == 2) {
        return distance_matrix[0][1];
    }
    if (start == (cities - 1)) {
        return testCost;
    }

    var answer = Infinity;

    for (var i = 0; i < cities; i++) {
        if (visited[i] == false) {
            visited[i] = true;
            testCost = testCost + distance_matrix[start][i];
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
