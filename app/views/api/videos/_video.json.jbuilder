json.extract! video, :id, :title, :uploader
json.videoURL url_for(video.video_file)
json.thumbnailURL url_for(video.thumbnail)