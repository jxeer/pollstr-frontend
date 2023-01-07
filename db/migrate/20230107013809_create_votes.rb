class CreateVotes < ActiveRecord::Migration[7.0]
  def change
    create_table :votes do |t|
      t.string :name
      t.string :answer
      t.belongs_to :poll, null: false, foreign_key: true

      t.timestamps
    end
  end
end
