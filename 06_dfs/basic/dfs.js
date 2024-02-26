function dfs_1(graph, v, visited) {
  // 현재 노드를 방문 처리
  visited[v] = true;
  console.log(v);
  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  graph[v].forEach((i) => !visited[i] && dfs_1(graph, i, visited));
}

function dfs_2(graph, vertex, visited = new Set()) {
  if (visited.has(vertex)) return;
  // 현재 노드를 방문 처리
  visited.add(vertex);
  console.log(vertex, visited);
  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  graph[vertex].forEach((el) => dfs_2(graph, el, visited));
}

// 각 노드가 연결된 정보를 표현
const graph1 = [
  [],
  [ 2, 3, 4 ],
  [ 1 ],
  [ 1, 5, 6 ],
  [ 1, 7 ],
  [ 3, 8 ],
  [ 3 ],
  [ 4 ],
  [ 5 ],
];

// 각 노드가 방문된 정보를 표현
const visited = Array(graph1.length).fill(false);

// BFS 함수 호출
dfs_1(graph1, 1, visited);

const graph2 = {
  1: [ 2, 3, 4 ],
  2: [ 1 ],
  3: [ 1, 5, 6 ],
  4: [ 1, 7 ],
  5: [ 3, 8 ],
  6: [ 3 ],
  7: [ 4 ],
  8: [ 5 ],
};

dfs_2(graph2, 1);