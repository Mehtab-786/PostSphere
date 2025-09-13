import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    };

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password,
                name: name
            })
            console.log(userAccount)
            if (userAccount) {
                return this.login({ email, password }) //login user here after creating account
            } else {
                return userAccount;
            }
        } catch (err) {
            console.log('Appwrite Services :: createAccount :: !', err)
        }
        return null
    }

    async login({ email, password }) {
        try {
            const loggedInUser = await this.account.createEmailPasswordSession({
                email: email,
                password: password
            })
            return loggedInUser
        } catch (err) {
            console.log('Appwrite Services :: login :: !', err)
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (err) {
            console.log('Appwrite Services :: getCurrentUser :: !', err)
        }
        return null
    }

    async logout() {
        try {
            await this.account.deleteSessions()  //you can use deleteSession for particular user
        } catch (err) {
            console.log('Appwrite Services :: logout :: !', err)
        }
        return null
    }
};

const authService = new AuthService();

export default authService;