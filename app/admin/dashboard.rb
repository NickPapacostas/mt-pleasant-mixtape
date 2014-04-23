ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  content title: proc{ I18n.t("active_admin.dashboard") } do
    columns do
      column do
        panel "Artists" do
          ul do
            Artist.all.map do |artist|
              li link_to(artist.name, admin_artist_path(artist))
            end
          end
        end
      end
    end
  end # content
end
