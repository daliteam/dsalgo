// https://velog.io/@yoonvelog/Dijkstra-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98

class unionfind {
  constructor(elements) {
    this.parent = {};
    elements.forEach((e) => (this.parent[e] = e));
  }

  union(a, b) {
    let roota = this.findparent(a);
    let rootb = this.findparent(b);

    if (roota === rootb) {
      console.log('이미 연결되어 있다');
      return false;
    }

    if (roota > rootb) {
      if (this.parent[b] != b) this.union(this.parent[b], a);
      this.parent[a] = this.parent[b];
      return true;
    } else {
      if (this.parent[a] != a) this.union(this.parent[a], b);
      this.parent[b] = this.parent[a];
      return true;
    }
  }

  findparent(a) {
    while (this.parent[a] !== a) {
      a = this.parent[a];
    }
    return a;
  }
}

class Kruskal {
  constructor(nodes, edges) {
    this.nodes = new unionfind(nodes);
    this.edges = edges;
    this.graph = [];
  }

  mst() {
    while (this.edges.length > 0) {
      this.findmin();
    }
    console.log(this.graph);
  }

  findmin() {
    this.edges.sort((first_node, second_node) => {
      return first_node[2] - second_node[2];
    });
    let minweight = this.edges.shift();
    let result = this.nodes.union(minweight[0], minweight[1]);
    if (result) {
      this.graph.push(minweight);
    }
  }
}

let nodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let edges = [
  ['a', 'b', 29],
  ['a', 'f', 10],
  ['e', 'f', 27],
  ['d', 'e', 22],
  ['b', 'g', 15],
  ['e', 'g', 25],
  ['b', 'c', 16],
  ['c', 'd', 12],
  ['d', 'g', 18],
];

let kruskal = new Kruskal(nodes, edges);
kruskal.mst();

/*
[
  [ 'a', 'f', 10 ],
  [ 'c', 'd', 12 ],
  [ 'b', 'g', 15 ],
  [ 'b', 'c', 16 ],
  [ 'd', 'e', 22 ],
  [ 'e', 'f', 27 ]
]
*/
