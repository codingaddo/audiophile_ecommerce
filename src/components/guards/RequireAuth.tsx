import { ReactNode, useEffect } from 'react'
import { useAuth } from 'contexts/AuthContext'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
}

const RequireAuth = ({ children }: Props): JSX.Element | null => {
  const { user, session } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // When auth resolved and there is no user, redirect to sign-in page
    if (session !== null && !user) {
      const next = encodeURIComponent(router.asPath)
      router.replace(`/auth/sign-in?next=${next}`)
    }
  }, [user, session, router])

  if (!user) return null // could add a spinner here

  return <>{children}</>
}

export default RequireAuth
