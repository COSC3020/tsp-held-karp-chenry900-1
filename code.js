/*
I am writing this from scratch not using anything or looking at anyone elses work I will commit the changes before I ask ai for help in any way
*/

function tsp_hk(distance_matrix){
    var length = distance_matrix;
    var answer = Ifinity;
    //bitmask goes here

    for (var i = 0; i < length; i++) {
        //bitmask goes here
        var cost = recursion(distance_matrix, i, array, mask);
        answer = Math.min(answer, cost);
    }
    
    return answer;
}

function recursion(distance_matrix, currentCity, array, mask) {
    var cost = Infinity;
    //mask here


    //this goes through each city starting at the bottom and finds the shorest distance until it gets back to the first city it starts at
    //from what i understand the mask that the ai uses uses a bit mask to make sure the same calculation isnt done multiple times
    //this is as much as i know how to write as i dont know how to initalize the mask and array so it works with the mask or the checks it uses
    //to return i just know how the recursion works to add the distances together and check against the cost to get the shortest path from the starting city
    for (var i = 0; i < distance_matrix.length; i++) {
        //mask here
        var testCost = distance_matrix[currentCity][i] + recursion(distance_matrix, i, array, mask);//copilot i did learn from this but i added this before using copilot to add the mask
        cost = Math.min(cost, testCost);
    }

    return cost;
}
