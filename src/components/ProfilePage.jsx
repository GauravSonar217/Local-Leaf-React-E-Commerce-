import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


function ProfilePage() {
    // const { isAuthenticated, user } = useAuth0();
    const { logout, isAuthenticated, user } = useAuth0();


    return (
        <React.Fragment>
            <div className="profileSec">
                <button className='normalBtn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                </button>
                {isAuthenticated && <p>{user.name}</p>}
                {isAuthenticated && <img src={user.picture} alt={user.name} />}
            </div>

        </React.Fragment>
    )
}

export default ProfilePage