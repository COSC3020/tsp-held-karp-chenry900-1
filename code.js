/*
I am writing this from scratch not using anything or looking at anyone elses work I will commit the changes before I ask ai for help in any way
*/

function tsp_hk(distance_matrix){
    var length = distance_matrix;
    var answer = Infinity;
    const memo = new Map();

    for (var i = 0; i < length; i++) {
        const mask = 1 << start;
        var cost = recursion(distance_matrix, i, memo, mask);
        answer = Math.min(answer, cost);
    }
    
    return answer;
}

function recursion(distance_matrix, currentCity, memo, mask) {
    var cost = Infinity;
    const key = `${currentCity},${mask}`;//copilot

    if (memo.has(key)) {//copilot
        return memo.get(key);//copilot
    }

    if (mask === (1 << distance_matrix.length) - 1) {//copilot
        // All cities visited; no return to start needed
        return 0;//copilot
    }


    //this goes through each city starting at the bottom and finds the shorest distance until it gets back to the first city it starts at.
    //from what i understand the mask that the ai uses uses a bit mask to make sure the same calculation isnt done multiple times
    //this is as much as i know how to write as i dont know how to initalize the mask array so it works with the mask or the checks it uses
    //to return i just know how the recursion works to add the distances together and check against the cost to get the shortest path from the starting city
    for (var i = 0; i < distance_matrix.length; i++) {
         if ((mask & (1 << nextCity)) === 0) {//copilot
            const newMask = mask | (1 << nextCity);//copilot
            var testCost = distance_matrix[currentCity][i] + recursion(distance_matrix, i, memo, newMask);//copilot i did learn from this but i added this before using copilot to add the mask
            cost = Math.min(cost, testCost);
         }
    }
    memo.set(key, cost);//copilot
    return cost;
}


/*
this code is what was given to me when i asked it to add a bit mask to my code without changing what i wrote

function tsp_hk(distance_matrix) {
    const n = distance_matrix.length;
    const memo = new Map();
    let answer = Infinity;

    for (let start = 0; start < n; start++) {
        const mask = 1 << start;
        const cost = recursion(distance_matrix, start, mask, memo);
        answer = Math.min(answer, cost);
    }

    return answer;
}

function recursion(distance_matrix, currentCity, mask, memo) {
    const n = distance_matrix.length;
    const key = `${currentCity},${mask}`;

    if (memo.has(key)) {
        return memo.get(key);
    }

    if (mask === (1 << n) - 1) {
        // All cities visited; no return to start needed
        return 0;
    }

    let cost = Infinity;

    for (let nextCity = 0; nextCity < n; nextCity++) {
        if ((mask & (1 << nextCity)) === 0) {
            const newMask = mask | (1 << nextCity);
            const nextCost = distance_matrix[currentCity][nextCity] +
                             recursion(distance_matrix, nextCity, newMask, memo);
            cost = Math.min(cost, nextCost);
        }
    }

    memo.set(key, cost);
    return cost;
}
*/
