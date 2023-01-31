class AppliedjobController < ApplicationController
    skip_before_action :verify_authenticity_token
        
        def index
            # b=Candidateapplication.where('candidateapplicationstatus': params[:candidateapplicationstatus] ,'userid': params[:userid]).count
            current_user= Userdetail.find_by_id(session[:current_user_id])
        
          b = Jobdetail.joins("INNER JOIN Candidateapplications ON Candidateapplications.jobcode = Jobdetails.jobcode where Candidateapplications.userid = #{current_user.id}").uniq
     
          render json: b
           
        end 
        
      

       
       
   
end
