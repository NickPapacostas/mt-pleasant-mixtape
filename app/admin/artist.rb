ActiveAdmin.register Artist do
  permit_params :name, :background_image_url, :song_name, :song_url, :description, :story_of_the_band, :story_of_the_song, :favorite_dc_thing

  form do |f|
    f.actions

    f.inputs do
      f.input :name
      f.input :background_image_url
      f.input :song_name
      f.input :song_url
      f.input :description, as: :wysihtml5, commands: :all, blocks: :all
      f.input :story_of_the_band
      f.input :story_of_the_song
      f.input :favorite_dc_thing
    end

    f.actions
  end
end
