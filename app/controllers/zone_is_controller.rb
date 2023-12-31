class ZoneIsController < ApplicationController
  before_action :set_zone_i, only: %i[ show edit update destroy ]
  before_action :authenticate_user, only: %i[ create edit update destroy ]

  # GET /zone_is or /zone_is.json
  def index
    @zone_is = ZoneI.order(:desk_id)
    render json: @zone_is
  end

  # GET /zone_is/1 or /zone_is/1.json
  def show
  end

  # GET /zone_is/new
  def new
    @zone_i = ZoneI.new
  end

  # GET /zone_is/1/edit
  def edit
    
  end

  # POST /zone_is or /zone_is.json
  def create
    @zone_i = ZoneI.new(zone_i_params)

    respond_to do |format|
      if @zone_i.save
        format.html { redirect_to zone_i_url(@zone_i), notice: "Zone i was successfully created." }
        format.json { render :show, status: :created, location: @zone_i }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @zone_i.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /zone_is/1 or /zone_is/1.json
  def update
    respond_to do |format|
      if @zone_i.update(zone_i_params.except(:id, :desk_id))
        format.html { redirect_to zone_i_url(@zone_i), notice: "Zone i was successfully updated." }
        format.json { render :show, status: :ok, location: @zone_i }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @zone_i.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /zone_is/1 or /zone_is/1.json
  def destroy
    @zone_i.destroy

    respond_to do |format|
      format.html { redirect_to zone_is_url, notice: "Zone i was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_zone_i
      @zone_i = ZoneI.find(params[:id])
    end

    def authenticate_user
      if current_user.nil?
        redirect_to new_user_session_path
      end
    end
    # Only allow a list of trusted parameters through.
    def zone_i_params
      params.require(:zone_i).permit(:desk_id, :status, :campaign)
    end
end
