class Video < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :uploader_id, presence: true

  has_one_attached :thumbnail
  has_one_attached :video_file

  belongs_to :uploader, class_name: :User, foreign_key: :uploader_id

end
