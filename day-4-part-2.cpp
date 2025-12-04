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
  bool done = false;
  while(cin >> s) {
    grid.push_back(s);
    // cout << s << endl;
  }
  
  // cout << "------- Initial -------" << endl;
  
  while (!done) {
    vector<pair<int, int>> removed;
    for (int i = 0; i < grid.size(); i++) {
      for (int j = 0; j < grid[i].size(); j++) {
        if (grid[i][j] == '@') {
          bool hasFourNeighbors = checkNeighbors(grid, i, j);
          accessible += hasFourNeighbors ? 1 : 0;
          if (hasFourNeighbors) {
            removed.push_back({i, j});
          }
        }
      }
    }
    for (int x = 0; x < removed.size(); x++) {
      grid[removed[x].first][removed[x].second] = 'X';
    }
    if (removed.size() == 0) done = true;
    removed.clear();
    // for (int i = 0; i < grid.size(); i++) {
    //   cout << grid[i] << endl;
    // }
    // cout << "----------------------------" << endl;
  }
  cout << accessible << " <-- Answer" << endl;
}