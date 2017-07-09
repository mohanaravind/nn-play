//Samples
class SampleData {
  //TODO: 
  //Dynamically source the data
  //https://vincentarelbundock.github.io/Rdatasets/datasets.html
  //https://archive.ics.uci.edu/ml/datasets.html
  static bostonHousing() {
    fetch('https://vincentarelbundock.github.io/Rdatasets/csv/Ecdat/Hdma.csv').then(data => {
      return data.text();
    }).then(resp => {
      console.log(resp);
    });
  }

  
  static binarySample1() {
    //https://iamtrask.github.io/2015/07/27/python-network-part2/
    //Suggested Hyperparameters:
    //Layers = 3x4
    //Learning rate = 0.4 - 0.8
    //Eochs = 6000
    //Tips:
    //To see the vanishing gradient problem of sigmoid function increase the layers
    //and note the network learning getting stuck
    const inputs = [
      [0, 0, 1],
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ];

    const labels = [
      [0],
      [1],
      [1],
      [0]
    ];

    //Number of training sample
    const m = inputs.length;

    return {
      inputs,
      labels,
      m
    };
  }

  static sinCos() {        
    //  y = sin(x) + cos(x)
    const inputs = [];
    const labels = [];

    for (let idx = 1; idx < 5; idx++) {	
      const x1 = Math.sin(idx);
      const x2 = Math.cos(idx);

      inputs.push([x1, x2]);
      labels.push(x1 + x2 > 0 ? [1, 0] : [0, 1]);
    }

    //Number of training sample
    const m = inputs.length;
    
    return {
      inputs,
      labels,
      m
    };
  }
}

//Helper
class Log {
  static success (message) {
    console.log(`%c ${message} `, 'background:#8BC34A; color:black;border-radius:2px');
  }

  static info (message) {
    console.log(`%c ${message} `, 'background:#CDDC39; color:black;border-radius:2px');
  }

}