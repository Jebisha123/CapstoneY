class CreateCandidateapplication < ActiveRecord::Migration[7.0]
  def change
    create_table :candidateapplications do |t|
t.integer :userid
t.integer :jobid    
t.string :jobcode
t.date :applieddate
t.string :candidateapplicationstatus
t.string :location
t.timestamps
    end
  end
end
