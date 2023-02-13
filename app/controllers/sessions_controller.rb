class SessionsController < ApplicationController
    # skip_before_action :authorized, only: :login

    def login
        admin = Admin.find_by(username: params[:username])
        if admin &.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin, status: :created
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    def logout
        admin = Admin.find_by(id: session[:admin_id])
        if admin
            session.delete :admin_id
            head :no_content
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end
end
