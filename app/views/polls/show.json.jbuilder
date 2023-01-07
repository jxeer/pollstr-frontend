json.partial! 'polls/poll', poll: @poll
json.votes do
  json.array! @votes do |vote|
    next if vote.poll_id != @poll.id

    json.extract! vote, :id, :name, :answer, :poll_id, :created_at, :updated_at
  end
end
