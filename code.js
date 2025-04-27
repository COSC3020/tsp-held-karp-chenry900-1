/*function tsp_hk(distance_matrix) {
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
*/
function tsp_hk(distance_matrix) {
    var n = distance_matrix.length;
    var memorize = {}; // Memoization cache

    // Helper function to recursively solve the problem with memoization
    function recursive(distance_matrix, visited, city, testCost, count) {
        // If all cities have been visited, return the cost to complete the tour
        if (count == n) {
            return testCost;
        }

        // Memoization key: the bitmask of visited cities and the current city
        var memoKey = visited + "-" + city;
        if (memorize[memoKey] !== undefined) {
            return memorize[memoKey];  // Return the cached result
        }

        var answer = Infinity;

        // Try visiting all other cities
        for (var i = 0; i < n; i++) {
            if (!(visited & (1 << i))) {  // Check if city i has not been visited
                var newVisited = visited | (1 << i); // Mark city i as visited
                var addedCost = testCost + distance_matrix[city][i];
                var totalCost = recursive(distance_matrix, newVisited, i, addedCost, count + 1);
                answer = Math.min(answer, totalCost);
            }
        }

        // Memoize the result
        memorize[memoKey] = answer;

        return answer;
    }

    var answer = Infinity;
    
    // Try starting the tour from each city
    for (var startCity = 0; startCity < n; startCity++) {
        var visited = 1 << startCity;  // Bitmask with only startCity visited
        var testCost = recursive(distance_matrix, visited, startCity, 0, 1);
        answer = Math.min(answer, testCost);
    }

    return answer;
}
