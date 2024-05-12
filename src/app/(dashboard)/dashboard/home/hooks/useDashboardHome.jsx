import { useState, useEffect, useContext } from 'react'
import { getAllUsers } from '@/services/api/api.user.service'
import { getReports } from '@/services/api/api.report.service'
import { UserContext } from '@/components/context/userContext'

const useDashboardHome = () => {
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalReports, setTotalReports] = useState(0)
  const { user } = useContext(UserContext)
  const idToken = user?.token

  // function to get all users data
  async function getAllUsersData() {
    try {
      const users = await getAllUsers()
      setTotalUsers(users?.pagination?.totalItems)
    } catch (error) {
    }
  }

  useEffect(() => {
    getAllUsersData()
  }, [])

  // function to get total reports
  async function getTotalReports() {
    try {
      const response = await getReports('', 1, idToken)
      setTotalReports(response?.pagination?.totalItems)
    } catch (error) {
    }
  }

  useEffect(() => {
    getTotalReports()
  }, [])

  return {
    totalUsers,
    totalReports,
  }
}

export default useDashboardHome
