Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :userdetail
  resources :skilltable
  resources :jobdetail
  resources :userlogin
  resources :candidateprofile
  resources :candidateapplication
  resources :appliedjob
  resources :logout
  resources :status
  resources :application
  resources :interviewing
  resources :offer
  resources :shortlisted
end
