//import { startServer } from "./half-server.js";
import { handler } from "./handler.js";

const form = <HTMLFormElement>document.querySelector('#eloForm');

if (form != null) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
//        startServer();
//        const url = new URL("http://127.0.0.1:2222");
        handler(form);
    });
}