# Booth's Algorithm Simulation

This project provides a simulation of Booth's Algorithm for binary multiplication. The application allows users to input two numbers, and it will simulate the multiplication step-by-step using Booth's Algorithm. The results are displayed in a table, showing the state of each component (AC, Q, Q<sub>1</sub>, and M) at each step.

## Features

- **User Input**: Users can input two integers to multiply.
- **Booth's Algorithm Steps**: The algorithm is executed step-by-step, updating the AC, Q, Q<sub>1</sub>, and M registers.
- **Detailed Table Display**: Displays the content of each register after every operation.
- **Stylized UI**: A responsive design with animations and interactive elements.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [File Structure](#file-structure)
- [Limitations](#limitations)
- [License](#license)

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/booths-algorithm-simulation.git
cd booths-algorithm-simulation
```

Open `index.html` in your browser to view and use the simulation.

## Usage

1. **Enter the First Number**: In the "Enter First Number" field, input the first factor.
2. **Enter the Second Number**: In the "Enter Second Number" field, input the second factor.
3. **Click Multiply**: Press the "Multiply" button to start the Booth's Algorithm simulation.
4. **View Results**: The table will update with each step of the algorithm, showing the AC, Q, Q<sub>1</sub>, and M registers and the operation performed.

## How It Works

Booth's Algorithm uses a series of arithmetic operations and bit shifts to multiply two binary numbers. Here’s an overview of the algorithm as implemented in this project:

1. **Initialize Registers**: Initialize the AC (accumulator) to zero, set Q to the binary of the second factor, and set M to the binary of the first factor.
2. **Bitwise Operations**: Depending on the last bit of Q and the value of Q<sub>1</sub>, perform arithmetic and logical operations:
    - **AC = AC - M** if Q<sub>0</sub> and Q<sub>1</sub> are 1 and 0, respectively.
    - **AC = AC + M** if Q<sub>0</sub> and Q<sub>1</sub> are 0 and 1, respectively.
    - **Shift Right**: Shift all bits of AC, Q, and Q<sub>1</sub> to the right.
3. **Repeat for Each Bit**: Continue this process until all bits are processed.
4. **Display Results**: After each operation, the contents of the registers and the operation performed are displayed in the table.

## File Structure

- `index.html`: Contains the HTML structure and layout of the simulation.
- `styles.css`: Contains CSS styling for the application, including animations and responsiveness.
- `script.js`: Contains JavaScript logic implementing Booth's Algorithm and handling user interactions.

## Example Output

For an input of `factor1 = 5` and `factor2 = -3`, the table might display steps like:

| AC       | Q    | Q<sub>1</sub> | M   | Operation           |
|----------|------|---------------|-----|----------------------|
| 00000000 | 1111 | 0             | 0001| Loading Data        |
| ...      | ...  | ...           | ... | Step-by-step output |

## Limitations

- **Binary Representation**: Only binary operations are shown; decimal output is not provided.
- **Input Validation**: Limited input validation—only integer inputs are supported.
- **Complexity**: The implementation is limited to Booth's Algorithm and does not cover other multiplication algorithms.

## License

This project is licensed under the MIT License.
