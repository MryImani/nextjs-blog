// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  if (req.method === "POST") {

    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !message ||
      !message.trim() === "" ||
      !name ||
      !name.trim() === ""
    ) {
      res.status(422).json({ message: "Please enter valid data!" , status : 422 });
    }

    const newMessage = {
      name: name,
      email: email,
      message: message,
    };
    res.status(201).json({
      message: "Your message has been approved.",
      status : 201,
      newMessage: newMessage,
    });
  }

}

