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
         console.log("pro"+profile)
         return true
        }
    }
 }
}

const handler = NextAuth(authOptions)
  
  export { handler as GET, handler as POST }
