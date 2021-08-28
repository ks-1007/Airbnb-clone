import axios from "axios"
import { useEffect, useState } from "react"

export function Dummy() {
  const [room, setRoom] = useState(false)
  useEffect(() => {
    axios
      .get(`http://localhost:3050/data/3faf8507-307f-4846-936c-a1465b3cfc42`)
      .then(({ data }) => {
        setRoom(data)
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }, [])
  return <div>{room.address.line1}</div>
}
