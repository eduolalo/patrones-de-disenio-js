/**
 *  How to create a Singleton in TypeScript?
 * 
 * 1. Make the constructor private by using a closure.
 * 2. Create a static method that controls access to the instance.
 */

class SingletonTS {
    private static instance: SingletonTS;
    private version: string;

    // Private constructor to prevent direct instantiation
    private constructor(version: string) {
        this.version = version;
    }

    // Static method to control access to the singleton instance
    public static getInstance(version: string): SingletonTS {
        if (!SingletonTS.instance) {
            SingletonTS.instance = new SingletonTS(version);
        }
        return SingletonTS.instance;
    }
}

// Usage
function appSingletonTS() {
    const singleton1 = SingletonTS.getInstance("1.0.0");
    const singleton2 = SingletonTS.getInstance("2.0.0");

    // const singleton4 = new SingletonTS("3.0.0"); // This line will cause a compilation error

    console.log(singleton1 === singleton2);
}

appSingletonTS();