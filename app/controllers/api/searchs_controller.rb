class Api::SearchsController < ApplicationController
    def index
        name = params[:search]
        @subs = Sub.where("sub_title LIKE ?", "%#{name}%") 
    end  

    private

    def sub_params
        params.require(:sub).permit(:search)
    end 
end    