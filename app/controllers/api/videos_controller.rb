class Api::VideosController < ApplicationController
  def show
    @video = Video.find(params[:id])
    render :show
  end

  def index
    @videos = Video.all
    render :index
  end

  def create
    @video = Video.new(video_params)
    if @video.save
      render "/api/videos/show"
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  private
  def video_params
    params.require(:video).permit(:title, :uploader_id, :video_file, :thumbnail)
  end
end
