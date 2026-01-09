/**
 * Paso 1
 */

interface BaseCarTS {
    showCosts(): void; 
}

/**
 * Paso 2
 */

class MastodonCarTS implements BaseCarTS {
    showCosts(): void {
        console.log("Mastodon Car costs $50,000");
    }
}

class RhinoCarTS implements BaseCarTS {
    showCosts(): void {
        console.log("Rhino Car costs $80,000");
    }
}

/**
 * Paso 3
 */

interface CarFactoryTS {
    makeCar(): BaseCarTS;
}

/**
 * Paso 4
 */

class MastodonCarFactoryTS implements CarFactoryTS {
    makeCar(): BaseCarTS {
        return new MastodonCarTS();
    }
}

class RhinoCarFactoryTS implements CarFactoryTS {
    makeCar(): BaseCarTS {
        return new RhinoCarTS();
    }
}


function appFactoryTS(factory: CarFactoryTS) {
    const car = factory.makeCar();
    car.showCosts();
}

appFactoryTS(new MastodonCarFactoryTS());
appFactoryTS(new RhinoCarFactoryTS());

type FactoryTypeTS = "mastodon" | "rhino";
const factoriesTS = {
    mastodon: MastodonCarFactoryTS,
    rhino: RhinoCarFactoryTS,
};

function createFactoryTS(type: FactoryTypeTS): CarFactoryTS {
    return new factoriesTS[type]();
}

appFactoryTS(createFactoryTS("mastodon"));
appFactoryTS(createFactoryTS("rhino"));