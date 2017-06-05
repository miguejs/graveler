import React from 'react';
import ReservationData from './reservation_data'
const steps = [
  {
    title: 'Reservación',
    component: <ReservationData></ReservationData>,
    index: 1
  },
   {
    title: 'Datos de Huéspedes',
    component: ReservationData,
    index: 2
  },
   {
    title: 'Datos para Autorización',
    component:  ReservationData,
    index: 3
  },
   {
    title: 'Datos de Pago',
    component:  ReservationData,
    index: 4
  },
   {
    title: 'Confirmación',
    component: ReservationData,
    index: 5
  }
]

const stepList = steps.map( (step) =>
   <div key={step.index.toString()} className="reservation-step"> { step.title }</div>
);

class ReservationWizard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { step: 0}
    this.steps = [];
    this.reservation = {
      hotel_id: '',
      reservation_type_id: '',
      room_type_id: '',
      fee_type_id: '',
      check_in: '',
      check_out: ''
    }
  }

  showStep(){
    this.steps = [
      {
        title: 'Reservación',
        component: <ReservationData reservation={this.reservation} />,
      },
      {
        title: 'Datos de Huéspedes',
        component: ReservationData,
      },
      {
        title: 'Datos para Autorización',
        component:  ReservationData,
      },
      {
        title: 'Datos de Pago',
        component:  ReservationData,
      },
      {
        title: 'Confirmación',
        component: ReservationData,
      }
    ]
    return this.steps[this.state.step].component
  }

  render() {
    return(
       <div className="revervation-form">
        { this.showStep()}
      <div className="reservation-steps-container">
        {stepList}
      </div>
     </div>
    )

  }
}

export default ReservationWizard;