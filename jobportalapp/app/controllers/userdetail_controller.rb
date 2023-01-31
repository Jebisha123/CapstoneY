require 'bcrypt'
class UserdetailController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        current_user =Userdetail.find_by_id(session[:current_user_id])
        render json: current_user
    end
    def create

        u=!params[:email].empty? and !params[:password].empty?
        if(u)
            s=Userdetail.create('email': params[:email],'password': params[:password],'usertype': 'student')
            puts s
            render json: "Data added"
        else
            render json: "Data not added"
        end
    end
    def update
        
        b=Userdetail.find(params[:id])
        if(b.nil?)
            render json: "Jobdetail does not exist"
        else
            b.update('email': params[:email],'password': params[:password],'usertype': 'student')
            render json: "JobDetails updated"
    end
end
    def destroy
        u=Userdetail.find(params[:id])
        u.destroy
    end
end
