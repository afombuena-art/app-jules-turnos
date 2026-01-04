import React from 'react';
import './DailySchedule.css';

function DailySchedule({ restaurantName, shifts, onBack }) {
  // Simple check to ensure shifts exist
  const safeShifts = shifts || [];

  return (
    <div className="daily-schedule">
      <header className="schedule-header">
        <button className="back-btn" onClick={onBack}>← Volver</button>
        <h3>{restaurantName}</h3>
      </header>
      
      <div className="schedule-content">
        <h4>Planilla del Día</h4>
        {safeShifts.length === 0 ? (
          <p className="no-shifts">No hay turnos asignados para hoy.</p>
        ) : (
          <ul className="shift-list">
            {safeShifts.map((shift) => (
              <li key={shift.id} className="shift-card">
                <div className="shift-info">
                  <span className="employee-name">{shift.employee}</span>
                  <span className="employee-role">{shift.role}</span>
                </div>
                <div className="shift-time">
                  {shift.start} - {shift.end}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DailySchedule;
