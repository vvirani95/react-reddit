class Api::SubsController < ApplicationController
    def index
        @subs = Sub.all
        render 'index'
    end 
    
    def show
        @sub = Sub.find_by(sub_title: params[:sub_title])
    end   

    def search
    end    
    
    def create 
        @sub = Sub.new(sub_params)
  
        if @sub.save
            render json: @sub, status: :created
        else
            render json: @sub.errors, status: :unprocessable_entity
        end
    end   
    
    private

    def sub_params
        params.require(:sub).permit(:sub_title, :sub_description)
    end 
end