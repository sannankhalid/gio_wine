Rails.application.routes.draw do


  get '(:locale)' => 'home#index', constraints: { locale: /en|es/ }
  scope '(:locale)', locale:/en|es/ do
    root  'home#index'
    get   'home'        => 'home#index', as: :home
    get   'wine'        => 'home#wine', as: :wine
    get   'contact'     => 'home#contact', as: :contact
    get   'press'       => 'home#press', as: :press
    get   'news'        => 'home#news', as: :news
    get   'calendar'    => 'home#calendar', as: :calendar
    get   'winefrance'  => 'home#winefrance', as: :winefrance
  end
  get 'wakeup' => 'home#wake_up'


end
