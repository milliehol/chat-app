class MessagesController < ApplicationController
  def index
    messages = Message.all
    render json: messages
  end

  def create
    message = Message.new(message_params)
    if message.save
      @message = Message.create(message_params)
      render json: @message
      ActionCable.server.broadcast 'room_channel', serialized_data
      head :ok
    end
  end

  private

  def message_params
    params.require(:message)
  end
end
