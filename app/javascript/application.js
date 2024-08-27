// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "../stylesheets/application"
import FilterController from "../controllers/filter_controller";

const application = Application.start();
application.register("filter", FilterController);