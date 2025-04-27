function tsp_hk(distance_matrix) {
    if(distance_matrix.length < 2) { return 0;}

    var length = distance_matrix.length;
    var cache = {};
    
    function recursive(cities, start) {
        if (cities.length == 2) { return distance_matrix[cities[0]][cities[1]];}
        
        var key = JSON.stringify(cities.sort());
        if (cache[key] !== undefined) { 
            return cache[key];
        }

        var answer = Infinity;
        for (var i = 0; i < cities.length; i++) {
            var checkCities = [...cities];
            var city = checkCities[i];
            checkCities.splice(i, 1);

            var cost = recursive(checkCities, city) + distance_matrix[start][city];

            var answer = Math.min(answer, cost);

            cache[key] = answer;
            return cost;
        }

        var cost = Infinity;
        var cities = [];
        for (var i = 0; i < length; i++) {
            cities.push(i);
        }

        for(var start = 0; start < cities.length; start++) {
            cost = Math.min(cost, recursive(cities, cities[start]));
        }

        return cost;
    }
}
