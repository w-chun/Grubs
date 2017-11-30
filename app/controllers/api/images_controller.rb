class Api::ImagesController < ApplicationController
  def index
    @images = Image.where(business_id: params[:business_id])
  end

  def create
    @image = Image.new(image_params)
    @image.business_id = params[:business_id]
    if @image.save
      render :show
    end
  end

  private

  def image_params
    params.require(:image).permit(:img_url)
  end
end
