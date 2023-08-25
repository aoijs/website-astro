import GitHub from '@auth/core/providers/github'

export default {
  providers: [
    GitHub({
      clientId: import.meta.env.CLIENT_ID,
      clientSecret: import.meta.env.CLIENT_SECRET,
    }),
  ],
}