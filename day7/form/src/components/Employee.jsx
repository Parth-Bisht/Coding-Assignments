import React from 'react'

function Employee({data}) {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.address}</td>
      <td>{data.age}</td>
      <td>{data.department}</td>
      <td>{data.salary}</td>
      <td>{data.married?"yes":"no"}</td>
    </tr>
  )
}

export default Employee
