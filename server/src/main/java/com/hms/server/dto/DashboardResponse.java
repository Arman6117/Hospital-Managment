package com.hms.server.dto;

import com.hms.server.entity.Appointment;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class DashboardSummaryResponse {

    // KPIs
    private long totalPatients;
    private long patientsVisitedThisWeek; // <-- RENAMED (was newPatientsThisWeek)
    private long totalAppointments;
    private long completedAppointments;
    private long pendingAppointments;

    // Graph 1: Weekly Visits
    private List<DailyAppointmentsSummary> weeklyAppointments;

    // Graph 2: Gender Distribution
    private List<GenderDistribution> genderDistribution;

    // Graph 3: Age Group Distribution
    private List<AgeGroupDistribution> ageGroupDistribution;

    // Table: Today's Appointments
    private List<Appointment> todaysAppointments;
}

