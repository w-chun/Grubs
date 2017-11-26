class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.business_id = params[business_id]
    @review.user_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @reviews.errors.full_messages, status: 422
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
