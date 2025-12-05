#include <bits/stdc++.h>
using namespace std;

int main() {
    int startPos = 50;
    string in;
    int cntZero = 0;
    
    while(cin >> in) {
        char dir = in[0];
        int rot = stoi(in.substr(1));
        if (dir == 'L') {
          while(rot--) {
            startPos -= 1;
            if (startPos == 0) {
              cntZero++;
            } else if (startPos == -1) {
              startPos = 99;
            }
          }
        } else { // R
          while(rot--) {
            startPos += 1;
            if (startPos == 100) {
              cntZero++;
              startPos = 0;
            }
          }
        }
        // cout << dir << " " << in.substr(1) << " " << startPos << endl;
    }
    cout << cntZero << endl;
    return 0;
}