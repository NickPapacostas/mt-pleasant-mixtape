MtPleasantMixtape::Application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :artists
  root 'artists#index'
end
