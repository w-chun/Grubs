class Api::BusinessSearchesController < ApplicationController
  def index
    @businesses = Business.search_results(params[:search][:query][:near])
    render :index
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end
