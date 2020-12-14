json.extract! comment, :id, :comment_txt, :video_id
json.username comment.commenter.username
json.user_id comment.commenter.id