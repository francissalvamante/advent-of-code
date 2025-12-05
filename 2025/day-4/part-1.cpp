/**
    0123456789
  0 ..@@.@@@@@
  1 @@@.@.@.@@
  2 @@@@@.@.@@
  3 @.@@@@..@.
  4 @@.@@@@.@@
  5 .@@@@@@@.@
  6 .@.@.@.@@@
  7 @.@@@.@@@@
  8 .@@@@@@@@.
  9 @.@.@@@.@.

  for i = 0;
    for j = 0;
      grid[0][0] == '.' -> don't do anything; j += 1 -> 1
      grid[0][1] == '.' -> don't do anything; j += 1 -> 2
      grid[0][2] == '@' -> check neighbors [i+1][j], [i+1][j-1], [i+1][j+1], [i][j-1], [i][j+1] -> j += 1 -> 3
      grid[0][3] == '@' -> check neighbors [i+1][j], [i+1][j-1], [i+1][j+1], [i][j-1], [i][j+1] -> j += 1 -> 4
      .
      .
      .
      grid[1][9] == '@' -> check neighbors [i-1][j], [i-1][j-1]
*/

#include <bits/stdc++.h>
using namespace std;

bool checkNeighbors(vector<string> grid, int i, int j) {
  int adjToiletPaper = 0;
  if (i == 0) {
    if (j != grid[i].size() && j != 0) {
      adjToiletPaper += grid[i][j+1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i][j-1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j-1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j+1] == '@' ? 1 : 0;
    } else if (j == grid[i].size()) {
      adjToiletPaper += grid[i][j-1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j-1] == '@' ? 1 : 0;
    } else if (j == 0) {
      adjToiletPaper += grid[i][j+1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j+1] == '@' ? 1 : 0;
    }
  } else if (i < grid.size() - 1) {
    if (j != grid[i].size() && j != 0) {
      adjToiletPaper += grid[i-1][j] == '@' ? 1 : 0;
      adjToiletPaper += grid[i-1][j-1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i-1][j+1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i][j+1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i][j-1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j-1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j+1] == '@' ? 1 : 0;
    } else if (j == grid[i].size()) {
      adjToiletPaper += grid[i-1][j] == '@' ? 1 : 0;
      adjToiletPaper += grid[i-1][j-1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i][j-1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j-1] == '@' ? 1 : 0;
    } else if (j == 0) {
      adjToiletPaper += grid[i-1][j] == '@' ? 1 : 0;
      adjToiletPaper += grid[i-1][j+1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i][j+1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j] == '@' ? 1 : 0;
      adjToiletPaper += grid[i+1][j+1] == '@' ? 1 : 0;
    }
  } else if (i == grid.size() - 1) {
    if (j != grid[i].size() && j != 0) {
      adjToiletPaper += grid[i][j+1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i][j-1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i-1][j] == '@' ? 1 : 0;
      adjToiletPaper += grid[i-1][j-1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i-1][j+1] == '@' ? 1 : 0;
    } else if (j == grid[i].size()) {
      adjToiletPaper += grid[i][j-1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i-1][j] == '@' ? 1 : 0;
      adjToiletPaper += grid[i-1][j-1] == '@' ? 1 : 0;
    } else if (j == 0) {
      adjToiletPaper += grid[i][j+1] == '@' ? 1 : 0;
      adjToiletPaper += grid[i-1][j] == '@' ? 1 : 0;
      adjToiletPaper += grid[i-1][j+1] == '@' ? 1 : 0;
    }
  }
  
  return adjToiletPaper < 4;
}

int main() {
  string s;
  vector<string> grid;
  int accessible = 0;
  while(cin >> s) grid.push_back(s);
  
  for (int i = 0; i < grid.size(); i++) {
    for (int j = 0; j < grid[i].size(); j++) {
      if (grid[i][j] == '@') {
        // cout << i << " " << j << endl;
        accessible += checkNeighbors(grid, i, j) ? 1 : 0;
        // cout << "-------------------------" << endl;
      }
    }
  }
  cout << accessible << " <-- Answer" << endl;
}