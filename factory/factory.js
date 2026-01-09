/** 
 * Paso 1
*/ 
class BaseCar {
    showCost() {
        throw new Error("Method not implemented.");
    }
}

/** 
 * Paso 2
*/
class MastodonCar extends BaseCar {
    showCost() {
        console.log("The cost of Mastodon Car is $30,000 MXN");
    }
}

class RhinoCar extends BaseCar {
    showCost() {
        console.log("The cost of Rhino Car is $50,000 MXN");
    }
}

/**
 * Paso 3
 */
class CarFactory {
    makeCar() {
        throw new Error("Method not implemented.");
    }
}

/**
 * Paso 4
 */
class MastodonCarFactory extends CarFactory {
    makeCar() {
        return new MastodonCar();
    }
}

class RhinoCarFactory extends CarFactory {
    makeCar() {
        return new RhinoCar();
    }
}

function appFactory(factory) {
    const car = factory.makeCar();
    car.showCost();
}

// appFactory(new MastodonCarFactory());
// appFactory(new RhinoCarFactory());

function createFactory(type) {
    const factories = {
        mastodon: MastodonCarFactory,
        rhino: RhinoCarFactory,
    };

    const Factory = factories[type];
    return new Factory();
}

appFactory(createFactory("mastodon"));
appFactory(createFactory("rhino"));