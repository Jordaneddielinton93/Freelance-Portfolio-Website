import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDG);

async function sendEmail(req, res) {
  let { Timeline, ProjectType, Budget, Fullname, DevOrDeisgnAndDev, Email, } = req.body;

  const message = {
    to: ["jordaneddielinton93@hotmail.co.uk", Email],
    from: "jordaneddielinton93@outlook.com",
    subject: "Jordans Freelance Service",
    text: `Project:${ProjectType}, Project-Type:${DevOrDeisgnAndDev},Budget:${Budget},Fullname:${Fullname},Time line:${Timeline}`,
    html: `
 
    <h2 style="color:blue;text-align:center;">Full Name:${Fullname}</h2>
    <h2>Email:${Email}</h2>
    <hr>
    <br/>
      <h2>Project:${ProjectType}</h2>
     <br/>
     <hr>
     <h2>Project-Type:${DevOrDeisgnAndDev}</h2>
     <br/>
     <h2>Budget:${Budget}</h2>
     <br/>
     <hr>
     <h2>Time Line:${Timeline}</h2>
     <p>Please note: This email was sent from a notification-only address that can't accept incoming email. Please do not reply to this message, but use my orginal email Jordaneddielinton93@hotmail.co.uk.</p>
     `,
  };


  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send(message);
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;



// try {
  //   // console.log("REQ.BODY", req.body);
  //   await sendgrid.send({
  //     to: "mannuarora7000@gmail.com", // Your email where you'll receive emails
  //     from: "manuarorawork@gmail.com", // your website email address here
  //     subject: `${req.body.subject}`,
  //     html: `<div>You've got a mail</div>`,
  //   });
  // } catch (error) {
  //   // console.log(error);
  //   return res.status(error.statusCode || 500).json({ error: error.message });
  // }