class AddSongUrlToArtist < ActiveRecord::Migration
  def change
    add_column :artists, :song_url, :text
  end
end
