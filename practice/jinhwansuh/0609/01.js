// 시도 여행경로
{
  function solution(tickets) {
    const answer = [];
    const visited = {};

    tickets.forEach((ticket) => {
      visited[`${ticket[0]} ${ticket[1]}`] = false;
    });

    function recur(city, result, num) {
      if (num === tickets.length + 1) {
        answer.push(result);
        return;
      }
      const sorted = tickets.filter((ticket) => ticket[0] === city).sort();

      let nextCity = '';
      for (const [now, next] of sorted) {
        if (visited[`${now} ${next}`] === false) {
          visited[`${now} ${next}`] = true;
          recur(next, [...result, next], num + 1);
          visited[`${now} ${next}`] = false;
        }
      }
    }

    recur('ICN', ['ICN'], 1);

    return answer.sort()[0];
  }
}

{
  function solution(tickets) {
    let routes = [];

    function dfs(extraTickets, currentLocation, route) {
      if (extraTickets.length === 0) {
        routes.push(route);

        console.log(routes);
      } else {
        extraTickets.forEach(([departure, destination], index) => {
          if (currentLocation === departure) {
            const newTickets = extraTickets.slice();
            newTickets.splice(index, 1);

            dfs(newTickets, destination, route.concat(destination));
          }
        });
      }
    }
    dfs(tickets, 'ICN', ['ICN']);

    return routes.sort()[0];
  }
}
