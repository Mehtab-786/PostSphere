import { toast } from 'react-toastify';
import conf from '../conf/conf.js';
import { Client, TablesDB, ID, Query, Storage } from "appwrite";


export class Services {
    client = new Client();
    tableDb;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.tableDb = new TablesDB(this.client)
        this.bucket = new Storage(this.client);
    };

    async createPost({ title, slug, content, featuredImage, status, userId,userName }) {
        try {
            const post = await this.tableDb.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
                data: { title, slug, content, featuredImage, status, userId, userName }
            })
            return post
        } catch (error) {
            console.log('Appwrite Services :: createPost :: !', error)
            toast.warning(error.message)
        }
        return null
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.tableDb.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status
                }
            })
        } catch (error) {
            console.log('Appwrite Services :: updatePost :: !', error)
            toast.warning(error.message)
        }
        return null
    }

    async deletePost(slug) {
        try {
            await this.tableDb.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
            })
            return true
        } catch (error) {
            console.log('Appwrite Services :: deletePost :: !', error)
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.tableDb.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
            })
        } catch (error) {
            console.log('Appwrite Services :: getPost :: !', error)
            toast.warning(error.message)
            return false
        }
    }

    async getPosts() {
        try {
            const upload = await this.tableDb.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                queries: [
                    Query.equal('status', "active")
                ]
            })
            return upload
        } catch (error) {
            console.log('Appwrite Services :: getPosts :: !', error)
            return false
        }
    }

    //file upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file
        })
        } catch (error) {
            console.log('Appwrite Services :: uploadFile ::!', error)
            toast.warning(error.message)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId
            })
            return true
        } catch (error) {
            console.log('Appwrite Services :: deleteFile ::!', error)
            return false
        }
    }

    async getFileView(fileId) {
        return this.bucket.getFileView({
            bucketId:conf.appwriteBucketId,
            fileId : fileId
        })        
    }
};

const services = new Services();

export default services;