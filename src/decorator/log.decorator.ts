export default function log(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    // keep a reference to the original function
    const originalValue = descriptor.value;

    // Replace the original function with a wrapper
    descriptor.value = function (...args: any[]) {
        console.log(`=> ${propertyKey}(${args.join(", ")})`);

        // Call the original function
        const result = +originalValue.apply(this, args);

        console.log(`<= ${result}`);
        
        return result;
    }
}