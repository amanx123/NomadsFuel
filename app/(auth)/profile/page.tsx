
import React from 'react'
import appwriteService from '@/lib/appwrite/config'
import { account } from '@/lib/appwrite/config';
async function Profile() {

    const user: any = appwriteService.getCurrentUser()?.then(res => console.log(res))

    return (
        <div className='text-black'>

        </div>
    )
}

export default Profile
