class JobdetailController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index 
        render json: Jobdetail.all
    end
    def show 
    
            b=Jobdetail.find(params[:id])

        render json: b
    end
    def create
        
        b = !params[:jobtitle].empty?
        if(b)
            s = Jobdetail.create('jobtitle': params[:jobtitle],'jobdescription': params[:jobdescription],'companyname': params[:companyname],
                'location': params[:location],'jobtype': params[:jobtype],'salary': params[:salary],
                'posteddate': params[:posteddate],'domain': params[:domain],'jobcode': params[:jobcode],
                'skillsrequired': params[:skillsrequired],'applicationstatus': params[:applicationstatus])
            puts s
            render json: "Data Added"
        else
            render json: "Data not Added"
        end
    end
    def update
        
        b=Jobdetail.find(params[:id])
        if(b.nil?)
            render json: "Jobdetail does not exist"
        else
            b.update('jobtitle': params[:jobtitle],'jobdescription': params[:jobdescription],'companyname': params[:companyname],
                'location': params[:location],'jobtype': params[:jobtype],'salary': params[:salary],
                'posteddate': params[:posteddate],'domain': params[:domain],'jobcode': params[:jobcode],
                'skillsrequired': params[:skillsrequired],'applicationstatus': params[:applicationstatus])
            render json: "JobDetails updated"
    end
end
# // "jobdescription":" web application using Ruby",
# // "companyname":"Nest Solutions",
# // "location":"Bangalore",
# // "jobtype":"Full Time",
# // "salary":60000,
# // "posteddate":"26-01-2023",
# // "domain":"Ruby",
# // "jobcode":"J131",
# // "skillsrequired":"Ruby,JavaScript,HTML,CSS",
# // "applicationstatus":"yes"
def destroy
  
    b = Jobdetail.find(params[:id])
    b.destroy
    render json: "Data Deleted"
end

end
