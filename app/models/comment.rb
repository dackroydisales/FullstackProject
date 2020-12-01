class Comment < ApplicationRecord
  validates :comment_txt, presence: true
  validates :video_id, presence: true
  validates :user_id, presence: true

  belongs_to :commenter, class_name: :User, foreign_key: :user_id
  belongs_to :video, class_name: :Video, foreign_key: :video_id
end
