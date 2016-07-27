# Hot and Cold
## Discription

The classic guessing game implimented using React and Redux. Here's how it works:
  1. The computer picks a number between 1 and 100
  2. The user enters guesses until they find the hidden number.</li>
  3. For each guess the user will be presented with feedback indicating how close their guess is from the hidden number.

## Installation

The code uses npm to manage dependencies. Make sure you have the latest version of node installed. 

1. Run `npm install` to set up the package
2. Since the package relies on webpack, you will also need to run `npm run build` before accessing the game
3. You will need to use a local server in order to access the game. Feel free to use your own local server or type  `npm run serve` at the command line. The package comes with [http-server](https://www.npmjs.com/package/http-server) already set as a dev dependency. 
4. If you choose to use the [http-server](https://www.npmjs.com/package/http-server) via the `npm run serve` command, you can access the game at [http://localhost:8080](http://localhost:8080) 

