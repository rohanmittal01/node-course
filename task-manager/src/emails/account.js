const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey('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')
const msg = {
    to: 'rohanmittal01@gmail.com',
    from: 'rohanmittal01@gmail.com',
    subject: 'Testing',
    text: 'I hope this email gets to you.'
}

sgMail.send(msg, function(err, json) { 
    if (err) { 
      console.log(err); 

      // Writing error message 
      console.log("Can't send message sent"); 
    } else { 

      // Writing success message 
      console.log("Message sent"); 
    } 
  })











// const http = require("http"); 
  
// const PORT = 3000; 
  
// http.createServer((req, res) => { 
  
//     // Initializing sendgrid object 
//     const mailer = require("@sendgrid/mail"); 
  
//     // Insert your API key here 
//     mailer.setApiKey(process.env.SENDGRID_API_KEY); 
      
//     // Setting configurations 
//     const msg = { 
//       to: "rohanmittal01@gmail.com", 
//       from: "rohan.mittal2018@vit.ac.in", 
//       subject: "Message sent for demo purpose",
//       text: "Hey there"
//     }; 
  
//     // Sending mail 
//     mailer.send(msg, function(err, json) { 
//       if (err) { 
//         console.log(err); 
  
//         // Writing error message 
//         res.write("Can't send message sent"); 
//       } else { 
  
//         // Writing success message 
//         res.write("Message sent"); 
//       } 
//     }); 
  
//     res.end(); 
//   }) 
// .listen(PORT, () => console.log(`Server running on PORT : ${PORT}`)); 