import { graphQLClient } from '@/clients/api'
import { GetCurrentUserQuery, User, Userdata } from '@/gql/graphql'
import { getCurrentUser } from '@/graphql/query/user'
import {NextAuthOptions} from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRECT=process.env.GOOGLE_CLIENT_SECRET!

const authOptions:NextAuthOptions={
 session:{
    strategy:'jwt'
 },
 providers:[
    GoogleProvider({
        clientId:GOOGLE_CLIENT_ID,
        clientSecret:GOOGLE_CLIENT_SECRECT
    })
 ],
 callbacks:{
    async signIn({account,profile}) {
        if(!profile?.email)
         throw new Error("no email ")
        else
        {
         // await graphQLClient.request(getCurrentUser,paylod)
         const payload:Userdata={
            email:profile?.email,
            name:profile.name,
            imgUrl:profile.image
         }
         console.log("--------")
         const   user = await graphQLClient.request(getCurrentUser,{ token: payload });
         console.log("user---",user)
         return true
        }
    }
 }
}

const handler = NextAuth(authOptions)
  
  export { handler as GET, handler as POST }
