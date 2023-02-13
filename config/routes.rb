Rails.application.routes.draw do
  # resources :admins, only: [:signup]
 
  post "/signup", to: "admins#signup"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  get '/me', to: 'admins#show'
end
