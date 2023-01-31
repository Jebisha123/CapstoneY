class CreateJobdetail < ActiveRecord::Migration[7.0]
  def change
    create_table :jobdetails do |t|
t.string :jobtitle
t.string :jobdescription
t.string :companyname
t.string :location
t.string :jobtype
t.integer :salary
t.date    :posteddate
t.string  :domain
t.string :jobcode
t.string :skillsrequired
t.string :applicationstatus 
      t.timestamps
    end
  end
end
