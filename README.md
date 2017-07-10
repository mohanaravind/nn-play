# Neural network playground

This repository is meant to build a simple lightweight neural network implementation that could run on browser.

It will have samples that one could quickly run and visualize the results. `Polymer, NumJS` are the libraries that are used in this project


### Setup

##### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli

Second, install [Bower](https://bower.io/) using [npm](https://www.npmjs.com)

    npm install -g bower

##### Initialize project from template

    mkdir my-app
    cd my-app
    polymer init starter-kit

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    polymer serve --open

### Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build/unbundled` folder, and are suitable
for serving from a HTTP/2+Push compatible server.

In addition the command also creates a fallback `build/bundled` folder,
generated using fragment bundling, suitable for serving from non
H2/push-compatible servers or to clients that do not support H2/Push.

    polymer build

### Preview the build

This command serves the minified version of the app at `http://localhost:8080`
in an unbundled state, as it would be served by a push-compatible server:

    polymer serve build/unbundled

This command serves the minified version of the app at `http://localhost:8080`
generated using fragment bundling:

    polymer serve build/bundled

### TODOs

- [x] Backpropagation
- [ ] Batch Sizing
- [ ] Regularization
- [ ] Dropout
- [ ] Bias support
- [ ] Updating samples
- [ ] Supporting other activation functions
- [ ] Stochastic gradient descent
- [ ] Dynamic data sources
- [ ] Display connecting lines over the graph
- [ ] Interactive graph definition
- [ ] Feature to disable non-linear activation on output layer
- [ ] Web worker
- [ ] Utilizing GPU (GPU.js)
- [ ] Export the computational graph
- [ ] CNN
- [ ] LSTM
- [ ] Python binding
- [ ] Tensorflow binding
- [ ] Visualization



### References
- https://iamtrask.github.io/2015/07/27/python-network-part2/
- http://stevenmiller888.github.io/mind-how-to-build-a-neural-network-part-2/
- https://github.com/Kulbear/deep-learning-nano-foundation/wiki/ReLU-and-Softmax-Activation-Functions
- http://gpu.rocks/
- https://github.com/bestiejs/benchmark.js
