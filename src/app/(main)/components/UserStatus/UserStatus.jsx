'use client'
import { useContext } from "react"
import { UserContext } from "@/components/context/userContext"
function UserStatus() {
    const { user, deleteUser } = useContext(UserContext)
    return (
        <section>
            <article>
                {user.data.completed ?
                    <>
                        <h4>UserName:{user.data.firstname}</h4>
                        <span>StatusCompleted: {user.data.completed&&"true"}</span><br />
                    </>
                    :
                    <>
                        <h4>UserName:</h4>
                    </>
                }

                <span>Logged: {user.logged?"true":"false"}</span><br />
                <span>Token:{user.token} </span><br />
                <button onClick={deleteUser}>logout</button>
            </article>
        </section>
    )
}

export default UserStatus
