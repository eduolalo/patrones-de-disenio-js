class MastodonCar {
  useGPS() {
    throw new Error("Method not implemented.");
  }
}

class RhinoCar {
  useGPS() {
    throw new Error("Method not implemented.");
  }
}

class MastodonSedanCar extends MastodonCar {
  useGPS() {
    console.log("[Sedan] Using GPS in Mastodon Car");
  }
}

class MastodonHatchCar extends MastodonCar {
  useGPS() {
    console.log("[Hatch] Using GPS in Mastodon Car");
  }
}

class RhinoSedanCar extends RhinoCar {
  useGPS() {
    console.log("[Sedan] Using GPS in Rhino Car");
  }
}

class RhinoHatchCar extends RhinoCar {
  useGPS() {
    console.log("[Hatch] Using GPS in Rhino Car");
  }
}

class CarAbstractFactory {
  createMastodonCar() {
    throw new Error("Method not implemented.");
  }

  createRhinoCar() {
    throw new Error("Method not implemented.");
  }
}

class SedanCarFactory {
  createMastodonCar() {
    return new MastodonSedanCar();
  }

  createRhinoCar() {
    return new RhinoSedanCar();
  }
}

class HatchCarFactory {
  createMastodonCar() {
    return new MastodonHatchCar();
  }

  createRhinoCar() {
    return new RhinoHatchCar();
  }
}

function appCarFactory(factory) {
  const mastodon = factory.createMastodonCar();
  const rhino = factory.createRhinoCar();

  mastodon.useGPS();
  rhino.useGPS();
}

appCarFactory(new SedanCarFactory());
appCarFactory(new HatchCarFactory());

function createFactory(type) {
  const factories = {
    sedan: SedanCarFactory,
    hatch: HatchCarFactory,
  };

  const Factory = factories[type];
  return new Factory();
}

appCarFactory(createFactory("sedan"));
appCarFactory(createFactory("hatch"));
