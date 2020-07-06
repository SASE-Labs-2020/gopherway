const Utilities = require('./Utilities');
const utility = new Utilities();

if (utility.pullGraph()) {
    console.log(utility.getGraph());
    utility.setEndpoints("Walter Library","Kolthoff Hall");
    console.log(utility.getPath());

}



