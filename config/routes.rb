Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :subs, only: [:create, :index, :show], param: :sub_title
  end
  namespace :api, defaults: {format: :json} do 
    resources :posts, only: [:create, :index, :show]
  end
  namespace :api, defaults: {format: :json} do 
    resources :searchs, only: :index, param: :sub_title
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'subs#root'
end
