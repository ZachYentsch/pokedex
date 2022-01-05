import { ApiPokesController } from "./Controllers/ApiPokeController.js";
import { MyPokesController } from "./Controllers/MyPokeController.js";
class App {
  apiPokesController = new ApiPokesController()
  myPokesController = new MyPokesController()

}

window["app"] = new App();
