class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
#<<<<<<< HEAD
  protect_from_forgery with: :exception
#=======
  # protect_from_forgery with: :exception
#>>>>>>> 3ad50dadf633f86bb6d190d8cad02ea5c1bf5fa6
end
