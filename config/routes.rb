Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create]
    resource :session, only: [:new, :create, :destroy]
    resources :businesses, only: [:index, :show] do
      resources :reviews, only: [:create, :index, :update]
    end
    resources :reviews, only: [:show, :destroy]
  end

  root "static_pages#root"
end
