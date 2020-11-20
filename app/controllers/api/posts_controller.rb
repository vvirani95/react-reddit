class Api::PostsController < ApplicationController
    def index
      @posts = Post.where(:sub_identifier => params[:sub_identifier])
      render 'index'
    end 
    
    def show
        @post = Post.find_by(sub_identifier: params[:sub_identifier])
    end   
    
    def create 
        @post = Post.new(post_params)
  
        if @post.save
            render json: @post, status: :created
        else
            render json: @post.errors, status: :unprocessable_entity
        end
    end   
    
    private

    def post_params
        params.require(:post).permit(:title, :post_body, :sub_identifier)
    end
end