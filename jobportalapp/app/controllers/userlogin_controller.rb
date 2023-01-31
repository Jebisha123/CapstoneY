require 'bcrypt'
class UserloginController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        
        render html: "login"
    end

    def create
        usr = Userdetail.find_by('email': params[:email])
        if(usr.nil?)
            render json: "User account does not exists"
        else
            if(usr.authenticate(params[:password]))
                session[:current_user_id] = usr.id
            render json: "success"
            else
                render json: "Password is not correct"
        end
    end

end
end
