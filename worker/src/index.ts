import ampqlib, { ConsumeMessage } from 'amqplib'

const queue = "Submission_QUEUE"

async function Consume(){

const connection = await ampqlib.connect("amqp://localhost:5672")

const channel= await connection.createChannel()


channel.prefetch(1)

 channel.consume(queue, async (message)=>{

    console.log("Message Received: ", message?.content)

    await new Promise((resolve, reject)=> setTimeout(resolve, 3000))

    channel.ack(message as ConsumeMessage)
    console.log("Task completed")
},{
    noAck: false
})

}

Consume()

