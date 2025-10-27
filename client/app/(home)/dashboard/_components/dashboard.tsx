'use client'
import React, { useEffect } from 'react'
import StatsSection from './stats-section'
import GraphsSection from './graphs-section'

import TodaysAppointmentSection from './todays-appoinment-section'
import ActionButtons from '@/components/action-buttons'
import { dashboardAPI } from '@/lib/apis/dashboard/api'

const Dashboard = () => {
  useEffect(() => {
    const fetchData = async ()=> {

      const response= await dashboardAPI.getDashboard();
      console.log(response)
    }
    fetchData()
  },[])
  return (
    <main className='px-10 py-6  overflow-x-hidden flex flex-col gap-10'>
       <ActionButtons/>
    <section>
        <StatsSection/>
    </section>
    <hr></hr>
    <section>
        <GraphsSection/>
    </section>
    <section>
      <TodaysAppointmentSection/>
    </section>
    </main>
  )
}

export default Dashboard