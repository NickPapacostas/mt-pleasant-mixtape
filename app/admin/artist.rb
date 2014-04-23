ActiveAdmin.register Artist do
  permit_params :name, :description

  form do |f|
    f.inputs do
      f.input :name
      f.input :description, as: :wysihtml5, commands: :all, blocks: :all
    end

    f.actions
  end
end
