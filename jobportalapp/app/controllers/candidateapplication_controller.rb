class CandidateapplicationController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        # current_user =Userdetail.find_by_id(session[:current_user_id])
        currenc_app = Candidateapplication.find_by_id(session[:current_user_id])
        # render json: currenc_app
        render json: Candidateapplication.all
    end
    def show
        currenc_app = Candidateapplication.find_by_id(session[:current_user_id])
        # render json: currenc_app
        render json: Candidateapplication.all
    end
    def create

    
    
            s=Candidateapplication.create('userid': session[:current_user_id],'jobid': params[:id],'jobcode': params[:jobcode],
                'applieddate': Date.today,'candidateapplicationstatus': params[:candidateapplicationstatus],'location': params[:location])
            puts s
            render json: "Data Added"
            end
            
{

    # "userid":8,
    # "jobid":"5",
    # "jobcode":"j567",
    # "applieddate":"27-01-2023",
    # "candidateapplicationstatus":"shortlisted",
    # "location":"Bengaluru"
    
    
    }

    def update
        
        b=Candidateapplication.find(params[:id])
        if(b.nil?)
            render json: "Jobdetail does not exist"
        else
            b.update('userid': params[:userid],'jobid': params[:id],'jobcode': params[:jobcode],
                'applieddate': params[:applieddate],'candidateapplicationstatus': params[:candidateapplicationstatus],'location': params[:location])
            render json: "JobDetails updated"
    end
end
    def destroy
        u=Candidateapplication.find(params[:id])
        u.destroy
    end
end
