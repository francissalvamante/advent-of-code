#include <bits/stdc++.h>
using namespace std;

int main() {
  int startPos = 50;
  string in;
  int cntZero = 0;
  while (cin >> in) {
    char dir = in[0];
    int rot = stoi(in.substr(1));
    
    if (rot > 100) rot %= 100;
    
    if (dir == 'L') {
      startPos -= rot;
      if (startPos < 0) {
        startPos += 100;
      }
    } else {
      startPos += rot;
      if (startPos > 0) {
        startPos %= 100;
      }
    }
    
    // cout << dir << " " << rot << " " << startPos << endl;

    cntZero += (startPos == 0 ? 1 : 0);
  }

  cout << cntZero << endl;
  return 0;
}