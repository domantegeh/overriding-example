class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} send ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }

  // overriding method
  sendMessage(message, receiver) {
    // calling method sendMessage from super class
    super.sendMessage(message, receiver);

    console.log("Message is sent via WhatsApp");
  }
}

const mailService = new MailService("someSender");
const whatsAppService = new WhatsAppService("+6281234567890", true);

mailService.sendMessage("Hi, how are you ?", "someReceiver");
whatsAppService.sendMessage("Hi, how are you ?", "+6289012345678");
