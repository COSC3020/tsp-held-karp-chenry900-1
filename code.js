/*
function tsp_hk(distance_matrix) {
    var visited = [];
    var testCost = 0;
    var count = 1;
    var answer = Infinity;

    for (var startCity = 0; startCity < distance_matrix.length; startCity++) {
        for (var i = 0; i < distance_matrix.length; i++) {
            visited[i] = false;
        }
        visited[startCity] = true;
        testCost = recursive(distance_matrix, visited, startCity, 0, count);
        if (answer > testCost) {
            answer = testCost;
        }
    }
        
    return answer;
}

function recursive(distance_matrix, visited, city, testCost, count) {
    var cities = distance_matrix.length;

    if (count == cities) {
        return testCost;
    }

    var answer = Infinity;

    for (var i = 0; i < cities; i++) {
        if (visited[i] == false) {
            visited[i] = true;
            var addedCost = testCost + distance_matrix[city][i];
            var totalCost = recursive(distance_matrix, visited, i, addedCost, (count +1));  
            if (answer > totalCost) {
                answer = totalCost;
            }
            visited[i] = false;
        }
    }

    return answer;
}
*/

function tsp_hk(distance_matrix) {
    var n = distance_matrix.length;
    
    // Handle the edge case where all distances are zero (no travel cost)
    var allZero = true;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (distance_matrix[i][j] !== 0) {
                allZero = false;
                break;
            }
        }
        if (!allZero) break;
    }
    
    if (allZero) return 0; // If all distances are zero, return 0 (no travel cost)

    var memo = {}; // memoization table
    
    // Recursive function with memoization
    function dp(mask, i) {
        // Base case: If all cities in the mask have been visited
        if (mask === (1 << i)) {
            return distance_matrix[0][i];
        }
        
        // Check if result is already computed for this state
        if (memo[mask] && memo[mask][i] !== undefined) {
            return memo[mask][i];
        }
        
        var minCost = Infinity;

        // Try all previous cities `j` that are in the visited set `mask`
        for (var j = 0; j < n; j++) {
            // If city `j` is visited in the current set `mask`, skip it
            if ((mask & (1 << j)) === 0 || j === i) {
                continue;
            }
            
            var cost = dp(mask ^ (1 << i), j) + distance_matrix[j][i]; // Cost from city `j` to city `i`
            minCost = Math.min(minCost, cost);
        }

        // Store the result in the memoization table
        if (!memo[mask]) memo[mask] = {};
        memo[mask][i] = minCost;

        return minCost;
    }

    var allVisitedMask = (1 << n) - 1; // All cities visited (all bits are 1)
    var minTourCost = Infinity;

    // Try all cities as the ending city and find the minimum cost
    for (var i = 1; i < n; i++) {
        minTourCost = Math.min(minTourCost, dp(allVisitedMask, i) + distance_matrix[i][0]);
    }

    return minTourCost;
}
