import React from 'react'
import StatsSection from './stats-section'
import GraphsSection from './graphs-section'

import TodaysAppointmentSection from './todays-appoinment-section'

const Dashboard = () => {
  return (
    <main className='px-10 py-6  overflow-x-hidden flex flex-col gap-10'>
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