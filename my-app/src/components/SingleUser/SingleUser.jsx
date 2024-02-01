import { useEffect } from "react";
import { useState } from "react"
import { fetchSingleUser } from "../../utils/singleRequests";
import { UserList } from "../UserList/UserList";

export const SingleUser = () => {
    const [singleUser, setSingleUser] = useState({});
    useEffect(() => {
        fetchSingleUser(3, setSingleUser)
    }, [])
    console.log(singleUser);

    return (
      <div>
        <h4>{singleUser.firstName}</h4>
      </div>
    );
}