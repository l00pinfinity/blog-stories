const greetings:string = 'Thanks for checking out this project';

export function sayHello(message:string = greetings) {
    return `Hello ${message}`
}