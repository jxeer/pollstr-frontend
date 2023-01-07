Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:5500'
    resource '*', headers: :any, methods: %i[post]
  end
end
