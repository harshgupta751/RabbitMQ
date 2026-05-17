import amqplib from 'amqplib'

const queue= "Submission_QUEUE"

async function sendMessage(){

const connection= await amqplib.connect("amqp://localhost:5672")

const channel = await connection.createChannel()

await channel.assertQueue(queue,{
    durable: true
}
 )

for(let i=0;i<20;i++){
  
  channel.sendToQueue(queue, Buffer.from(JSON.stringify({
    submissionID: 1234
  })), {
  persistent: true
})

 console.log("Notification sent successfully")

}
 
}

sendMessage()