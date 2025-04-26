function tsp_hk(distance_matrix) {
    var visited = [];
    var start = 0;
    var answer = 0;

    for (var i = 1; i < distance_matrix.length; i++) {
        visited[i] = false;
    }

    answer = recursive(distance_matrix, visited, start, answer);
    return answer;
}

function recursive(distance_matrix, visited, start, answer) {
    var cities = distance_matrix.length;

    if (cities == 2) {
        return distance_matrix[0][1];
    }
    else {
        

    
    return answer;
}
