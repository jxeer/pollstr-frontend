require 'pusher'

 Pusher.app_id = ENV["1533745"]
 Pusher.key = ENV["7938ad3aa35c2622f4ec"]
 Pusher.secret = ENV["d04e53b1c075b692a52a"]
 Pusher.cluster = ENV["us2"]
 Pusher.logger = Rails.logger
 Pusher.encrypted = true
