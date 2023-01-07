json.extract! vote, :id, :name, :answer, :poll_id, :created_at, :updated_at
json.url vote_url(vote, format: :json)
