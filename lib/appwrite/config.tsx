import conf from "@/conf/config";
import { Client, Account, ID } from 'appwrite'

interface CreateUser {
    name: string,
    email: string,
    password: string
}
interface LoginUser {
    email: string,
    password: string
}

const appwrite = new Client()

appwrite.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)

export const account = new Account(appwrite)

class AppwriteService {
    async createAccount({ name, email, password }: CreateUser) {
        try {
            const user = await account.create(ID.unique(), email, password, name)
            if (user) {
                return this.login({ email, password })
            } else {
                return user
            }
        } catch (error: any) {
            console.error(error.message)
        }

    }
    async login({ email, password }: LoginUser) {
        try {
            return await account.createEmailSession(email, password)
        } catch (error: any) {
            console.error(error.message)
        }
    }
    async isLoggedIn(): Promise<boolean> {
        try {
            const data = this.getCurrentUser()
            return Boolean(data)
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser() {
        try {
            return account.get()
        } catch (error) {
            console.log("Get current user error" + error)
        }
        return null
    }
    async logout() {
        try {
            return await account.deleteSession("current")
        } catch (error) {
            console.log("Logout error" + error)
        }
    }
}

const appwriteService = new AppwriteService()

export default appwriteService