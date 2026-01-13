const nodemailer = require("nodemailer");
const Admin = require("../models/Admin");

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "sahanibittu053@gmail.com",
        pass: "trtrclqfqpdgaqqs",
    },
});

// Send an email using async/await
const sendMail = async (email, username) => {
    const info = await transporter.sendMail({
        from: "sahanibittu053@gmail.com",
        to: email,
        subject: "Login to CINEBOOK",
        text: `Hey ${username} thank you for login in our website`, 
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>CINEBOOK Login</title>
</head>
<body style="margin:0; padding:0; background-color:#0f172a; font-family:Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 0;">
        
        <table width="600" cellpadding="0" cellspacing="0" style="background:#020617; border-radius:12px; overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="padding:24px; background:#020617; text-align:center;">
              <h1 style="color:#facc15; margin:0; font-size:28px;">🎬 CINEBOOK</h1>
              <p style="color:#94a3b8; margin:8px 0 0;">Your Movie Ticket Partner</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px; background:#020617;">
              <h2 style="color:#e5e7eb; margin-top:0;">Hello ${username},</h2>

              <p style="color:#cbd5f5; font-size:16px; line-height:1.6;">
                You have successfully logged in to <strong>CINEBOOK</strong>.
                We’re excited to have you back 🎉
              </p>

              <p style="color:#cbd5f5; font-size:16px; line-height:1.6;">
                Book the latest movies, choose your favorite seats, and enjoy the show!
              </p>

              <!-- CTA Button -->
              <div style="text-align:center; margin:32px 0;">
                <a href="http://localhost:3000"
                   style="
                     background:#facc15;
                     color:#020617;
                     padding:14px 28px;
                     text-decoration:none;
                     font-weight:bold;
                     border-radius:8px;
                     display:inline-block;
                   ">
                  🎟️ Book Tickets Now
                </a>
              </div>

              <p style="color:#94a3b8; font-size:14px;">
                If this wasn’t you, please secure your account immediately.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px; background:#020617; text-align:center; border-top:1px solid #1e293b;">
              <p style="color:#64748b; font-size:12px; margin:0;">
                © ${new Date().getFullYear()} CINEBOOK. All rights reserved.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`

    });

    console.log("Message sent:", info.messageId);
}


module.exports = sendMail;