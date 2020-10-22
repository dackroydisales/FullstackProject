json.extract! video, :id, :title
json.videoURL url_for(video.video_file)
json.thumbnailURL url_for(video.thumbnail)
json.uploader video.uploader.username