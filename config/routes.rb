GiPaint::Engine.routes.draw do
  get '(*path)', to: 'ui#show', as: :ui
end
