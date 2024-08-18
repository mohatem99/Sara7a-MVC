import QRCode from "qrcode";
import Message from "../../../Db/models/message.model.js";

export const messages = async (req, res) => {
  let qrCodeUrl;

  let url = `${req.protocol}://${req.get("host")}/user`;

  if (req.session.isLoggedIn) {
    url += `/${req.session.userId}`;
    try {
      qrCodeUrl = await QRCode.toDataURL(url);
    } catch (err) {
      console.error(err);
    }
    let messagesData = await Message.find({ user: req.session.userId });

    res.render("messages", {
      profileUrl: url,
      qrCodeUrl,
      messagesData,
      session: req.session,
    });
  } else {
    res.redirect("/login");
  }
};

export const sendMessage = async (req, res) => {
  try {
    console.log(req.params.id);
    await Message.create({ message: req.body.message, user: req.params.id });
    res.redirect(`/user/${req.params.id}`);
  } catch (e) {
    console.log(e);
  }
};
