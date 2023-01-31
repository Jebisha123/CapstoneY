class SkilltableController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render json: Skilltable.all
    end
    def create

        u=!params[:skillname].empty? 
        if(u)
            s=Skilltable.create('skillname': params[:skillname])
            puts s
            render json: "Data added"
        else
            render json: "Data not added"
        end
    end
end
