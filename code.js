function tsp_hk(distance_matrix) {
    if(distance_matrix.length < 2) { return 0;}

    var cities = [];
    var cache = {};

    for (var i = 0; i < distance_matrix.length; i++) {
        cities.push(i);
    }
    
    function recursive(cities, start) {
        if (cities.length == 2) { return distance_matrix[cities[0]][cities[1]];}
        
        var key = JSON.stringify(cities.sort());
        if (cache[key] !== undefined) { 
            return cache[key];
        }

        var answer = Infinity;
        var trimmed = [...cities];
        trimmed.splice(trimmed.indexOf(start), 1);
        for(var i = 0; i < trimmed.length; i++) {
            var city = trimmed[i];
            min = Math.min(min, 
                heldKarp(trimmed, city) + distance_matrix[start][city]);
        }

            cache[key][start] = answer;
            return answer;
        }

        var cost = Infinity;
        var cities = [];
        for (var i = 0; i < cities.length; i++) {
            cost = Math.min(cost, recursive(cities, cities[i]));
        }

        return cost;
    }
