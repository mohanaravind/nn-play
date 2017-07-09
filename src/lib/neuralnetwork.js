
class NeuralNetwork {
  constructor (info) {
    this.info = info;
  }

  predict(input) {
    return this.forward(input);
  }

  //TODO: Any common utility and helper methods
  saveAsJson() {
    //TODO: To do transfer learning
  }
}

class FullyConnected extends NeuralNetwork {

  constructor (info) {
    super(info);

    //Initialize the weights
    this._initializeWeights();
  }

  _initializeWeights () {              
    const arch = this.info.architecture;

    let weights = [];        
    let weights_delta = [];

    for (let idx = 0; idx + 1 < arch.length; idx++) {
      //Create a random weight with a mean of 0
      const weight = nj.random([arch[idx], arch[idx + 1]]).multiply(2).subtract(1);
      weights.push(weight);
      weights_delta.push(nj.zeros(weights[idx].shape));
    }

    //Preserve the details in the network
    this.weights = weights;
    this.weights_delta = weights_delta;
  }

  setData (data) {
    this.data = data;        
  }

  forward(input) {
    //Initialize
    const layers = [];
    input = nj.array(input);

    this.weights.forEach((weight, idx) => {
      const feedIn = nj.dot(input, weight);
      const feedOut = Activation.sigmoid(feedIn);

      //Preserve
      layers.push({input, weight, feedIn, feedOut });

      //Set this as input for the next layer
      input = feedOut;              
    });

    //Preserve
    this.layers = layers;

    //Return the final output
    return input;
  }

  backward(error) {
    const weights_delta = this.weights_delta;
    const layers = this.layers;

    //Go through the layers in reverse order
    for (let idx = layers.length - 1; idx > -1; idx--) {        
      const layer = layers[idx];

      //Calculate the gradient
      let gradient = Activation.sigmoid_prime(layer.feedOut).multiply(error);
      
      //Reshape and compute the effect on the weight              
      let A = nj.array([layer.input.tolist()]);
      let B = nj.array([gradient.tolist()])
      let weight_gradient = A.T.dot(B);

      //Accumulate the weight gradient (Sum of gradients of all inputs)
      weights_delta[idx] = weights_delta[idx].add(weight_gradient);          

      //Backprop the error to the previous(back) layer
      error = nj.dot(layer.weight, gradient);
    }        
  }

  learn() {
    //Weights accumulator
    const weights_delta = this.weights_delta;
    const m = this.data.m;

    //Make the correction to the weights
    this.weights = this.weights.map((weight, idx) => {
      //Get the change that needs to be done to the weight
      // const delta = weights_delta[idx].multiply(this.info.learningrate).divide(m);
      const delta = weights_delta[idx].multiply(this.info.learningrate);
      //Clear the weight delta from the accumulator so to be ready for next epoch
      weights_delta[idx] = nj.zeros(weight.shape);

      //Adjust the weight
      return weight.subtract(delta);
    });        
  }

}

//Activations
class Activation {
  // https://github.com/Kulbear/deep-learning-nano-foundation/wiki/ReLU-and-Softmax-Activation-Functions
  static sigmoid(x) {
    // 1/(1 + e^-x)        
    let res = x.exp();
    res = res.pow(-1);
    res = res.add(1);
    res = res.pow(-1);

    return res;
  }

  static sigmoid_prime(x) {
    // x = sigmoid(x); return x * (1-x)
    const xSquared = x.pow(2);          
    return x.subtract(xSquared);
  }

  static relu(x) {
    //TODO:
    // http://kawahara.ca/what-is-the-derivative-of-relu/
  }

  static relu_prime(x) {
    //TODO:
  }
}

