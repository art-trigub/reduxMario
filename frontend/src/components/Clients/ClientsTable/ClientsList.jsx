import React from 'react'
import ClientListItem from './ClientsListItem'

function ClientsList({ data }) {
    return (
        <div>
                <ClientListItem data={data}/>
        </div>
    )
}

export default ClientsList
