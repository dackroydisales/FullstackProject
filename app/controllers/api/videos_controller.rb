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

  end

  private
  def video_params
    params.require(:video).permit(:title, :uploader_id, :video, :thumbnail)
  end
end
