class AddSongNameToArtist < ActiveRecord::Migration
  def change
    add_column :artists, :song_name, :text
  end
end
