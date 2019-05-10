export interface ChatMessage {
    chatId?: string,
      createdOn: Date,
      message: string,
      receiverId:string,
      receiverName: string,
      senderId: string,
      senderName: string
  }