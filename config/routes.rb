Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:show, :index, :create]
    resources :comments, only: [:create, :update, :destroy, :index]
    resources :likes, only: [:create, :update, :destroy, :index]
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
