Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'


  #log in
  root 'session#new'

  post '/session' => 'session#create'

  delete '/session' => 'session#destroy'

  #get '/register' => 

  get '/users/new' => 'users#new'

  post '/apis/query' => 'apis#query'

  get '/apis/:id/step' => 'apis#step'
  get '/apis/meal' => 'apis#meal'


  

  post '/users' => 'users#create'

  get '/users/:id' => 'users#show'

  put '/users/:id' => 'users#update'

  get '/users/:id/all' => 'users#all'

  get '/users/:id/step' => 'apis#step'

  get '/users/:id/location' => 'apis#location'

  get '/users/:id/today' => 'users#today'

  get '/users/:id/follows' => 'follows#show'

  put '/users/:id/follows' => 'follows#update'

  get '/users/:id/users/:id2/follow' => 'follows#check'
 
  post '/users/:id/users/:id2/follow' => 'follows#create'

  get '/users/:id/users/:id2/show' => 'users#othershow'


  



#resources :users
 
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
