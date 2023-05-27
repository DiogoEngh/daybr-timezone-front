import React, { useEffect, useState } from 'react'
import { getGroups } from './service'
import { Spin } from 'antd'

const GetStarted = () => {

  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGroups().then(reponse => {
      reponse.json().then(info => {
        setGroups(info)
      })
    }).finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {loading && <Spin />}
      {(!loading && groups?.length > 0) && groups[0].map((elem, index) => {
        return <p>{elem.group}</p>
      })}
    </div>
  )
}

export default GetStarted