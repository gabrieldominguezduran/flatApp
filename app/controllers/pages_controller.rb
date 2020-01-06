class PagesController < ApplicationController
  def index
  end

  def flats
    @flats = Flat.all

    render json: { data: @flats }
  end
end
