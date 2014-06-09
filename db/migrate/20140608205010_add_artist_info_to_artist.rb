class AddArtistInfoToArtist < ActiveRecord::Migration
  def change
    add_column :artists, :story_of_the_band, :text
    add_column :artists, :story_of_the_song, :text
    add_column :artists, :favorite_dc_thing, :text
    add_column :artists, :created_at, :datetime
    add_column :artists, :updated_at, :datetime
  end
end
