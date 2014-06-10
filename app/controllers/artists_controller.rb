class ArtistsController < ApplicationController
  respond_to :html, :json
  def create
    @artist = Artist.create!(artist_params)
    respond_with @artist
  end

  def index
    @artists = Artist.all.order(:name)
    respond_with @artists
  end

  def show
    @artist = Artist.find(params[:id])
    respond_with @artist
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :description)
  end
end