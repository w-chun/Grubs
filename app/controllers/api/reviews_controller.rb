class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    @review.business_id = params[:business_id]
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    if params[:business_id]
      @reviews = Business.find_by(id: params[:business_id]).reviews
      render :index
    end
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  def update
    @review = current_user.reviews.find_by(id: params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @review.destroy
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating)
  end
end
