import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import request from '../../utils/request'
import { useSelector } from 'react-redux'

const Payments = ({orderId}) => {
  const currentUser = useSelector((state) => state.user.currentUser)
  console.log(orderId)
  const handlePayments = async () => {
    await request.patch(`users/${currentUser?._id}/manageOrders/${orderId}/update`, {status: 'in progress'})
  }
  return (
    <Box sx={{width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Button variant='contained' onClick={handlePayments}>Pay now</Button>
    </Box>
  )
}

export default Payments