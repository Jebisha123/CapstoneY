class CandidateprofileController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index 
        render json: Candidateprofile.all
    end
    def show 
    
            b=Candidateprofile.find(params[:id])
        render json: b
    end
    def create
        
        b = !params[:email].empty?
        if(b)
        
            s = Candidateprofile.create('firstname': params[:firstname],'lastname': params[:lastname],'email': params[:email],
                'contact': params[:contact],'address': params[:address],'about': params[:about],
                'profilepic': params[:profilepic],'currentcompany': params[:currentcompany],'ctc': params[:ctc],
                'experience': params[:experience],'currentrole': params[:currentrole],
                'skills': params[:skills],'resumelink': params[:resumelink],
                'expectedsalary': params[:expectedsalary],'preferredlocation': params[:preferredlocation])
            puts s
            render json: "Data Added"
        else
            render json: "Data not Added"
        end
    end
    def update
        
        b=Candidateprofile.find(params[:id])
        if(b.nil?)
            render json: "Candidateprofile does not exist"
        else
            b.update('firstname': params[:firstname],'lastname': params[:lastname],'email': params[:email],
                'contact': params[:contact],'address': params[:address],'about': params[:about],
                'profilepic': params[:profilepic],'currentcompany': params[:currentcompany],'ctc': params[:ctc],
                'experience': params[:experience],'currentrole': params[:currentrole],
                'skills': params[:skills],'resumelink': params[:resumelink],
                'expectedsalary': params[:expectedsalary],'preferredlocation': params[:preferredlocation])
            render json: "Candidateprofile updated"
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
  
    b = Candidateprofile.find(params[:id])
    b.destroy
    render json: "Data Deleted"
end

end

