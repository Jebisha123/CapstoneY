class CreateSkilltable < ActiveRecord::Migration[7.0]
  def change
    create_table :skilltables do |t|
     t.string :skillname
      t.timestamps
    end
  end
end
