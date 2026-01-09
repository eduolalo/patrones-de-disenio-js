/**
 *  How to create a Singleton in JavaScript?
 * 
 * 1. Make the constructor private by using a closure.
 * 2. Create a static method that controls access to the instance.
 */

class Singleton {
    static instance = null;
    constructor(version) {
        this.version = version;
    }

    static getInstance(version) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(version);
        }
        return Singleton.instance;
    }
}

function appSingleton() {
    const singleton1 = Singleton.getInstance("1.0.0");
    const singleton2 = Singleton.getInstance("2.0.0");

    console.log(singleton1 === singleton2);
}

appSingleton();