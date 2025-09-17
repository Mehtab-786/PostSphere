import conf from '../conf/conf.js';
import { Client, TablesDB, ID, Databases, Query, Storage } from "appwrite";


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

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            const post = await this.tableDb.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
                data: { title, slug, content, featuredImage, status, userId }
            })
            return post

            //         data: {                          //data can be saved in this format
            //     "username": "walter.obrien",
            //     "email": "walter.obrien@example.com",
            //     "fullName": "Walter O'Brien",
            //     "age": 30,
            //     "isAdmin": false
            // },


            // return await this.tableDb.createRow(
            //     conf.appwriteDatabaseId,
            //     conf.appwriteTableId,
            //     ID.unique(),
            //     { title, slug, content, featuredImage, status, userId }
            // )
        } catch (error) {
            console.log('Appwrite Services :: createPost :: !', error)
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
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('Appwrite Services :: uploadFile ::!', error)
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

    getFilePreview(fileId) {
        const imageFile = this.bucket.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId : fileId
        })
        // console.log(imageFile)
        return imageFile
    }
};

const services = new Services();

export default services;