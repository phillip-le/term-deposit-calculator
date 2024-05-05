# Term Deposit Calculator

## Overview

This is a React app for calculating the value of term deposits based on:

- Initial deposit amount
- Interest rate per annum
- Investment term in years
- Frequency that interest is paid

## Setup

If you use [VSCode](https://code.visualstudio.com/) and have the [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) extension, you can use the `>Dev Containers: Reopen in Container` command in the Command Palette to open this repository in a container with all of the required dependencies.

- See [this tutorial](https://code.visualstudio.com/docs/devcontainers/tutorial) for a list of prerequisites for developing with Dev Containers

---

Otherwise, you will need:

- [node](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)

Install dependencies

```sh
pnpm install
```

## Development

### Running the dev server

```sh
pnpm dev
```

### Run tests

```sh
pnpm test
```

### Linting

```sh
pnpm lint
```

### Formatting

```sh
pnpm format
```

## Assumptions

- Assumed that when interest is paid "at maturity" that this is the same as simple interest because no interest is paid during the investment term and so, there is no change to the principal amount during the investment term
- Assumed that all interest paid during the investment term are reinvested into the term deposit

## Tradeoffs

- Usually, I prefer to keep the frontend as dumb as possible. So, I would prefer to keep the execution of logic like `src/term-deposit-calculator/use-cases` inside of an API and simply have the UI render the outputs from an API but in this case, building out an entire API for this calculator would be overkill. Perhaps, if the interest rates of the term deposit were sensitive, it would make sense to move the logic calculations from client side to server side. 
- Chose to do input validation on the UI where feedback for invalid inputs can be easily returned to the user rather than have error handling logic in `(src/term-deposit-calculator/use-cases)`. 

## Design decisions

- The `src/term-deposit-calculator/use-cases` folder understands how to calculate the final balance of the term deposit and is decoupled from the UI. This means that we can evolve our UI by for example, changing technologies used to power the UI while leaving the core logic unchanged. 