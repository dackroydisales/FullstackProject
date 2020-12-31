class Like < ApplicationRecord
  validates :is_like, presence: true
  validates :video_id, presence: true
  validates :user_id, presence: true

  belongs_to :user
  belongs_to :video

end
