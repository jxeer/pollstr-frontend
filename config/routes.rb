Rails.application.routes.draw do
  resources :polls
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'polls#index'

  # Defines the root path route ("/")
  # root "articles#index"
end
