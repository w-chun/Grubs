Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create]
    resource :session, only: [:new, :create, :destroy]
    resources :businesses, only: [:index, :show] do
      resources :reviews, only: [:create, :index, :update]
      resources :images, only: [:create, :index]
    end
    resources :reviews, only: [:show, :destroy]
    resources :business_searches, only: [:index] do
      get "business_by_city", on: :collection
    end
  end

  root "static_pages#root"
end
