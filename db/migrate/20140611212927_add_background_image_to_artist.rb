class AddBackgroundImageToArtist < ActiveRecord::Migration
  def change
    add_column :artists, :background_image_url, :text
  end
end
