class AdminsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def signup
        admin = Admin.create(admin_params)
        if admin.valid?
            session[:admin_id] = admin.id
            render json: admin, status: :created
        else
            render json: {errors: admin.errors.full_messages}, status: :unprocessible_entity
        end
    end

    
    def show 
      admin = Admin.find_by(id: session[:admin_id])
      if admin
          render json: admin, status: :created
      else
          render json: { error: ["Not authorized"] }, status: :unauthorized
      end
    end
    

    private
      def admin_params
        params.permit(:username, :email, :password, :password_confirmation)
      end

      # def render_unprocessable_entity(invalid)
      #   render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      # end

      # def set_admin
      #   @admin = Admin.find(params[:id])
      # end
end
