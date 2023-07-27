// in JS the Object.create() method creates a new object, using the existing object as the prototype of a newly created object.

// simple object with some properties.
const learner = {
    isLearner: false, 
    introduction: function(){
        console.log(`my name is ${this.name}. am i learning: ${this.isLearner}`);
    }
};

// Object.create method.
const me = Object.create(learner);

// set the property to the object instances but the property wont go to the object prototype.
me.name="Bishal";
me.isLearner=true; // inherited properties can be overwritten.

me.introduction();
