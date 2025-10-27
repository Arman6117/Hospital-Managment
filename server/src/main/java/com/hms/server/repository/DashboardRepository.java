package com.hms.server.repository;

import com.hms.server.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface DashboardRepository extends JpaRepository<Appointment, Long> {

    // Count appointments by status
    Long countByStatus(String status);

    // Get today's appointments
    List<Appointment> findByDateOrderByTimeAsc(LocalDate date);

    // Count appointments by day of week (last 7 days)
    @Query("""
            SELECT FUNCTION('DAYNAME', a.date) as day, COUNT(a) as count
            FROM Appointment a
            WHERE a.date >= :startDate
            GROUP BY FUNCTION('DAYOFWEEK', a.date), FUNCTION('DAYNAME', a.date)
            ORDER BY FUNCTION('DAYOFWEEK', a.date)
            """)
    List<Object[]> countAppointmentsByDayOfWeek(LocalDate startDate);
}