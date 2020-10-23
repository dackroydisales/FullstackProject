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
    # probably attach video file and thumbnail file separately
    if @video.save
      # redirect to video show page
      render "/api/videos/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def video_params
    params.require(:video).permit(:title, :uploader_id, :video, :thumbnail)
  end
end
