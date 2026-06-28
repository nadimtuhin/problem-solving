# problem-solving

JavaScript solutions to competitive programming and interview problems, organised by source platform. Each solution has a Jest spec file.

## What it is

Problems are grouped by where they come from:

| Directory | Source |
|---|---|
| `leetcode/` | LeetCode problems |
| `pramp/` | Pramp interview practice |
| `algoexpert/` | AlgoExpert problems |
| `toptal/` | Toptal screening problems |
| `upwork/` | Upwork screening problems |
| `problems/` | Miscellaneous problems |

### Problems covered

**LeetCode:**
- `leet-2.js` — Add Two Numbers (two implementations: recursive and iterative linked list addition)
- `leet-25.js` — Reverse Nodes in k-Group
- `leet-36.js` — Valid Sudoku
- `leet-297.js` — Serialize and Deserialize Binary Tree
- `leet-4-linked-list-cycle.js` — Linked List Cycle detection
- `binarySearch.js` — Binary search
- `threeSum.js` — Three Sum

**Pramp:**
- `islandCount.js` — Count islands in a binary matrix (DFS flood fill)
- `decryptMessage.js` — Decrypt a message using a substitution cipher built from an alphabet key
- `isToeplitz.js` — Check if a matrix is a Toeplitz matrix
- `indexElementEquity.js` — Find index where the value equals the index

**AlgoExpert:**
- `p3NonConstructibleChange.js` — Find the minimum change you cannot construct from a set of coins

**Toptal / Upwork:**
- Various screening problems, each in its own directory with a spec file.

## Requirements

- Node.js 16 (pinned via Volta in `package.json`)
- Yarn or npm

## Installation

```bash
git clone https://github.com/nadimtuhin/problem-solving.git
cd problem-solving
yarn install
```

## Running tests

Run all tests in watch mode:

```bash
yarn start
```

Run only changed files in watch mode:

```bash
yarn watch
```

Run all tests once (useful in CI):

```bash
yarn jest --watchAll=false
```

## Adding a new problem

Use the scaffold script to generate the solution and spec files:

```bash
./scripts/create.sh <directory> <functionName>
```

Example:

```bash
./scripts/create.sh leetcode twoSum
```

This creates:
- `leetcode/twoSum.js` with an empty function body and a `module.exports`.
- `leetcode/twoSum.spec.js` with a placeholder `it` block.

Implement the function and write assertions in the spec file.

## Directory layout

```
problem-solving/
├── algoexpert/
├── leetcode/
├── pramp/
├── problems/
├── scripts/
│   └── create.sh
├── toptal/
└── upwork/
```

## CI

GitHub Actions CodeQL analysis runs on push and pull request to `master` and on a weekly schedule. It scans JavaScript code for security vulnerabilities and reports findings in the Security tab.

## Contributing

1. Fork the repository.
2. Add a solution file and its spec in the appropriate directory.
3. Ensure all tests pass (`yarn jest --watchAll=false`).
4. Open a pull request with a brief description of the problem and your approach.

See `CONTRIBUTING.md` for guidelines.

## License

MIT. See `LICENSE`.
