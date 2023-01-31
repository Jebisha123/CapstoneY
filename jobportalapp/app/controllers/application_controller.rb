class ApplicationController < ActionController::Base
    def index
       
        current_user= Userdetail.find_by_id(session[:current_user_id])
        b=Candidateapplication.where('candidateapplicationstatus': params[:candidateapplicationstatus] ,'userid': session[:current_user_id]).count
      
 
      render json: b
end
end
