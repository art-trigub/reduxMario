import React, { useState } from 'react'
import Divider from '@material-ui/core/Divider';
import Ticket from './Ticket'
import './style.css'
import { Paper } from '@material-ui/core';


function ClientViewСustomerRequest({ data, id }) {
    const [dataRequestClient, setDataRequestClient] = useState([
        {
            ticketNumber: "2357",
            child: [
                {
                    childNumber: "5623",
                    statusRequest: "Закрыт",
                    reminderDate: "",
                    creatorRequest: "Евгений Мингалёв",
                    assignedTo: "Лариса Тихонова",
                    whoChanged: "Евгений Мингалёв",
                    requestMethod: "Мы позвонили клиенту",
                    comunicationType: "Телефон",
                    topicRequest: "Возврат клиента",
                    outgoingContact: "",
                    dateRequest: "03.08.2020 09:09:42",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque asperiores voluptates autem velit harum molestiae, vitae culpa consectetur rerum officia!"
                },
                {
                    childNumber: "5624",
                    statusRequest: "Закрыт",
                    reminderDate: "",
                    creatorRequest: "Евгений Мингалёв",
                    assignedTo: "Лариса Тихонова",
                    whoChanged: "Евгений Мингалёв",
                    requestMethod: "Мы позвонили клиенту",
                    comunicationType: "Телефон",
                    topicRequest: "Возврат клиента",
                    outgoingContact: "",
                    dateRequest: "03.08.2020 09:15:37",
                    description: "20.05.19.А/О.  23.05.19. 09:46 А/О. 05.06.19. А/О."
                }

            ]
        },
        {
            ticketNumber: "2787",
            child: [
                {
                    childNumber: "6032",
                    statusRequest: "Закрыт",
                    reminderDate: "",
                    creatorRequest: "Евгений Мингалёв",
                    assignedTo: "Лариса Тихонова",
                    whoChanged: "Евгений Мингалёв",
                    requestMethod: "Мы позвонили клиенту",
                    comunicationType: "Телефон",
                    topicRequest: "Возврат клиента",
                    outgoingContact: "",
                    dateRequest: "03.08.2020 09:09:42",
                    description: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    childNumber: "6044",
                    statusRequest: "Закрыт",
                    reminderDate: "",
                    creatorRequest: "Евгений Мингалёв",
                    assignedTo: "Лариса Тихонова",
                    whoChanged: "Евгений Мингалёв",
                    requestMethod: "Мы позвонили клиенту",
                    comunicationType: "Телефон",
                    topicRequest: "Возврат клиента",
                    outgoingContact: "",
                    dateRequest: "03.08.2020 09:15:37",
                    description: "20.05.19.А/О.  23.05.19. 09:46 А/О. 05.06.19. А/О."
                },
                {
                    childNumber: "6072",
                    statusRequest: "Закрыт",
                    reminderDate: "",
                    creatorRequest: "Евгений Мингалёв",
                    assignedTo: "Лариса Тихонова",
                    whoChanged: "Евгений Мингалёв",
                    requestMethod: "Мы позвонили клиенту",
                    comunicationType: "Телефон",
                    topicRequest: "Возврат клиента",
                    outgoingContact: "",
                    dateRequest: "03.08.2020 10:26:22",
                    description: "20.05.19.А/О.  23.05.19. 09:46 А/О. 05.06.19. А/О."
                }

            ]
        }
    ])
    return (
        <div>
            {
                dataRequestClient.map((item) => (
                    <div key={item.ticketNumber} className="ticket">
                        <Paper elevation={3}>
                            <Ticket key={item.ticketNumber} data={item} />
                        </Paper>
                    </div>
                ))
            }
        </div>
    )
}

export default ClientViewСustomerRequest
