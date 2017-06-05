import React from 'react';
class ReservationData extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {

    return(
       <div className="reservation-container">
      <div className="reservation-container-header">
        Datos de tu Reservacion
      </div>
      <div className="reservation-container-row">
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

      </div>
      <div className="reservation-container-row">
          <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
         <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="reservation-container-footer">
      </div>
    </div>
    )

  }
}

export default ReservationData;