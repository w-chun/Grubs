class Api::BusinessesController < ApplicationController
  def create
    @business = Business.new(business_params)
    @business.save
  end

  def index
    @businesses = Business.all
    render :index
  end

  def show
    @business = Business.find_by(id: params[:id])
    render :show
  end

  private

  def business_params
    params.require(:business).permit(:name, :address, :city, :state, :zipcode)
  end
end
