# Advent of Code 2015

My solutions for [Advent of Code 2015](https://adventofcode.com/2015) challenges.

## About

Advent of Code is an annual coding event with daily programming puzzles throughout December. This repository contains my solutions implemented in various programming languages.

## Solutions

| Day | Part 1 | Part 2 | Language   |
| --- | ------ | ------ | ---------- |
| 1   | ✅     | ✅     | JavaScript |
| 2   | ✅     | ✅     | JavaScript |
| 3   | ✅     | ✅     | JavaScript |
| 3   | ✅     | ✅     | NodeJS     |

## Running the Solutions

### JavaScript Solutions

```bash
cd day-X && node part-Y.js < input.txt
```

Or pipe input directly:

```bash
echo "your input" | cd day-X && node part-Y.js
```

### C++ Solutions

Compile and run:

```bash
cd day-X && g++ part-Y.cpp -o part-Y
./day-X-part-Y < input.txt
```

## Repository Structure

```
advent-of-code/
├── day-1
├──── part-1.js
├──── part-2.js
├── day-2
├──── part-1.js
├──── part-2.js
├──── input.txt
├──── sample-input.txt
├── day-3
├──── part-1.js
├──── part-2.js
├──── input.txt
├──── sample-input.txt
├──── logical-scratch.txt # used to check logic for moving santa and robot-santa when shifting
├── day-4
├──── package-lock.json
├──── package.json
├──── part-1.js
├──── part-2.js
└── README.md
```

## Notes

Solutions are implemented as I work through the challenges. The choice of programming language varies based on the problem or my preference at the time.
