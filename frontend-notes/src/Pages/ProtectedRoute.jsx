import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const [session, setSession] = useState(undefined)

  useEffect(function () {
    supabase.auth.getSession().then(function ({ data: { session } }) {
      setSession(session)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(function (_event, session) {
      setSession(session)
    })

    return function () {
      subscription.unsubscribe()
    }
  }, [])

  if (session === undefined) {
    return null
  }

  if (!session) {
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedRoute;