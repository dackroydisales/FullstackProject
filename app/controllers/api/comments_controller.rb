class Api::CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params);
    if comment.save
      @comments = Comment.all
      if (params[:comment][:video_id])
        @comments = @comments.where(video_id: params[:comment][:video_id])
      end
    render "/api/comments/index"
    else
      render json: comment.errors.full_messages, status: 422 
    end
  end

  def index
    @comments = Comment.all
    if (params[:video_id])
      @comments = @comments.where(video_id: params[:video_id])
    end

    render "/api/comments/index"
  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :video_id, :comment_txt)
  end
end
