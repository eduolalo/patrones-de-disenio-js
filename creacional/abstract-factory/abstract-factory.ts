interface MastodonCar {
  useGPS(): void;
}

interface RhinoCar {
  useGPS(): void;
}

class MastodonSedanCarImp implements MastodonCar {
  useGPS(): void {
    console.log("[Sedan] Using GPS for Mastodon Car");
  }
}

class MastodonHatchCarImp implements MastodonCar {
  useGPS(): void {
    console.log("[Hatch] Using GPS for Mastodon Car");
  }
}

class RhinoSedanCarImp implements RhinoCar {
  useGPS(): void {
    console.log("[Sedan] Using GPS for Rhino Car");
  }
}

class RhinoHatchCarImp implements RhinoCar {
  useGPS(): void {
    console.log("[Hatch] Using GPS for Rhino Car");
  }
}

interface CarAbstractFactoryTS {
  createMastodonCar(): MastodonCar;
  createRhinoCar(): RhinoCar;
}

class SedanCarFactoryTS implements CarAbstractFactoryTS {
  createMastodonCar(): MastodonCar {
    return new MastodonSedanCarImp();
  }
  createRhinoCar(): RhinoCar {
    return new RhinoSedanCarImp();
  }
}

class HatchCarFactoryTS implements CarAbstractFactoryTS {
  createMastodonCar(): MastodonCar {
    return new MastodonHatchCarImp();
  }
  createRhinoCar(): RhinoCar {
    return new RhinoHatchCarImp();
  }
}

function appFactoryTS(factory: CarAbstractFactoryTS) {
  const mastodonCar = factory.createMastodonCar();
  mastodonCar.useGPS();

  const rhinoCar = factory.createRhinoCar();
  rhinoCar.useGPS();
}

type CarFactoryTypeTS = "sedan" | "hatch";

function createFactoryTS(type: CarFactoryTypeTS): CarAbstractFactoryTS {
  const factoriesTS: Record<CarFactoryTypeTS, new () => CarAbstractFactoryTS> =
    {
      sedan: SedanCarFactoryTS,
      hatch: HatchCarFactoryTS,
    };
  const Factory = factoriesTS[type];
  return new Factory();
}

appFactoryTS(createFactoryTS("sedan"));
appFactoryTS(createFactoryTS("hatch"));

export {};
